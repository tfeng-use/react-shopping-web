import * as types from './actionTypes'
import { getList } from '../../../api/home'
// import axios from 'axios'


export const getGoodsList = (value:any) => ({
  type: types.GOODSLIST,
  value
})


interface GoodslistProp {
  isMore: boolean;
  pageNo: number;
  min?: number;
  max?: number;
  listProp?: string;
}

export const getGoodsListAction = (params: GoodslistProp) => {
  let obj = {
    pageNo: params.pageNo,
    min: params.min,
    max: params.max
  }
  // 如果还有更多的
  if (params.isMore) {
    obj.pageNo = params.pageNo++;
  } else {
    return;
  }
  return (dispatch:any) => {
    // 这儿通过obj获取列表
    // axios.get('http://localhost:3001/goods').then(res => {
    //   console.log('这儿是res', res);
    // })
    console.log('这儿是getList', getList);
    // console.log('这儿是obj', obj);
    // let objTemp = {
    //   pageNo: 1,
    //   min: '0',
    //   max: '100'
    // }

    getList().then(res => {
      console.log('这儿是res', res);
      let value = {
        listProp: params.listProp,
        list: res.data.rows,
        page: obj.pageNo,
        total: res.data.total, 
      }
      dispatch(getGoodsList(value))
    })
  }
}