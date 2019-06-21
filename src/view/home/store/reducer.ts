import * as types from './actionTypes'

let goodsTypeArr = ['All', '0-100', '100-500', '500-1000', '1000-5000'];

// 获取goodsManageObj的初始值
let defaultObj:any = {};
goodsTypeArr.forEach(item => {
  defaultObj[item] = {
    pageNo: 1,
    list: [],
    isMore: true,
  }
})

interface GoodItem {
  page: 1; // 当前的pageNo
  list: Array<any>; // 当前对应的列表
  isMore: boolean; // 是否还有更多
}

interface Goods {
  [prop: string]: GoodItem
}

interface State {
  goodsManageObj: Goods
}

interface Action {
  type: string;
  value?: any;
}

// 定义初始化state
let defaultState: State = {
  goodsManageObj: defaultObj
}

export default (state: State = defaultState, action:Action) => {
  switch (action.type) {
    case types.GOODSLIST: {
      let arr = [...state.goodsManageObj[action.value.listProp].list, ...action.value.list];
      return Object.assign({}, state, {
        goodsManageObj: {
          ...state.goodsManageObj,
          [action.value.listProp]: {
            list: arr,
            isMore: arr.length < action.value.total?true:false,
            page: action.value.page
          }
        },
      })
    }
    default: {
      return state
    }
  }
}

 