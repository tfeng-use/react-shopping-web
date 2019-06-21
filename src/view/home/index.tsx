import * as React from 'react';
import { HomeWrapper } from './style';
import Header from '../../components/header/index';
import Bread from '../../components/Bread/index';
import Sort from '../../components/sort/index'
import GoodItem from '../../components/goodItem/index'
import {getScrollTop, getScrollHeight, getWindowHeight, EventUtil} from '../../utils/utils'
import { Spin } from 'antd';
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreators'

// 定义props的接口
export interface Props {
  goodsListObj: any,
  getGoodsList: any,
}

let timer:any = null;
// 声明单个价格区间的格式
interface Price {
  type?: string;
  min?: string;
  max?: string;
}

// 声明面包屑的格式
interface BreadItem {
  name: string,
  path?: string,
}

interface State {
  testNumber: number;
  currentIndex: number;
  priceList: Array<Price>;
  BreadList: Array<BreadItem>;
  showLoading: boolean; // 显示loading
  isMore: boolean; // 是否还有更多
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      testNumber: 1,
      currentIndex: 0,
      priceList: [
        {
          type: 'ALl'
        },
        {
          min: '0.00',
          max: '100.00'
        }, {
          min: '100.00',
          max: '500.00'
        }, {
          min: '500.00',
          max: '1000.00'
        }, {
          min: '1000.00',
          max: '5000.00'
        }
      ],
      BreadList: [
        {
          name: 'Home',
        },
        // {
        //   name: 'goods',
        //   path: 'http:baidu.com',
        // }
      ],
      showLoading: false,
      isMore: true,
    };
    this.scrollFn = this.scrollFn.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  scrollFn () {
    if (timer) {
      clearTimeout(timer);
    } 
    timer = setTimeout(() => {
      if(getScrollTop() + getWindowHeight() === getScrollHeight()){
        if (this.state.isMore) {
          this.setState({
            showLoading: true
          })
        }
  　　}
    }, 20);
  }

  handlePrice (index:number) {
    if (this.state.currentIndex === index) {
      return;
    }
    this.setState({
      currentIndex: index
    })
  }

  componentDidMount () {
    let fn = this.scrollFn.bind(this);
    // 通过节流模式添加滚动事件
    EventUtil.addHandler(window, 'scroll', fn);
    let {currentIndex, priceList} = this.state;
    let property = '';
    if (priceList[currentIndex].type) {
      property = 'All';
    } else {
      property = Number(priceList[currentIndex].min) + '-' + Number(priceList[currentIndex].max)
    }

    let currentGoods = this.props.goodsListObj[property]
    let obj = {
      isMore: currentGoods.isMore,
      pageNo: currentGoods.pageNo,
      listProp: property,
      min: priceList[currentIndex].min,
      max: priceList[currentIndex].max,
    }
    this.props.getGoodsList(obj);
  }

  componentWillUnmount () {
    // 取消滚动事件的监听
    EventUtil.removeHandler(window, 'scroll', this.scrollFn);
    timer = null;
  }

  render() {
    let { BreadList, priceList, showLoading, currentIndex} = this.state;
    let { handlePrice } = this;
    let goodsList = [
      {
        id: '1234',
        imgPath: '//i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg',
        name: '小米9',
        currentPrice: '2999',
      }, {
        id: '3452',
        imgPath: '//i1.mifile.cn/a1/pms_1547020852.30751177!220x220.jpg',
        name: 'Redmi Note7',
        currentPrice: '999'
      }, {
        id: '6534',
        imgPath: '//i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg',
        name: '小米6x',
        currentPrice: '1599'
      }, {
        id: '3546',
        imgPath: '//i1.mifile.cn/a1/pms_1524636075.71677607!220x220.jpg',
        name: '小米笔记本',
        currentPrice: '5699'
      }
      // id price name goodImg
    ]
    function getPriceList () {
      return (
        <dl>
          <dt>PRICE：</dt>
          {
            priceList.map((item, index) => {
              return (
                <dd 
                  className={currentIndex === index?'price active':'price'} 
                  key={index}
                  onClick={() => handlePrice(index)}
                  >
                  {item.type?'All': `${item.min} - ${item.max}`}
                </dd>
              )
            })
          }
        </dl>
      )
    }
    function getDoodsList () {
      return (
        goodsList.map(item=> {
          return <GoodItem msg={item} key={item.id}></GoodItem>
        })
      )
    }
    return (
      <HomeWrapper>
        <Header></Header>
        <div className="bread-wrapper">
          <Bread breadArr={BreadList}></Bread>
        </div>
        <div className="sort-wrapper w">
          <Sort></Sort>
        </div>
        <div className="content w clearfix">
          <div className="price-list float_l">
            {getPriceList()}
          </div>
          <ul className="goodList">
            {getDoodsList()}
            <div className="loading-wrapper">
              {
                showLoading?<Spin tip="加载更多..."></Spin>:null
              }
            </div>
          </ul>
        </div>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state:any) => ({
  goodsListObj: state.home.goodsManageObj
})

const mapDispatchToProps = (dispatch:any) => ({
  // GoodslistProp {
  //   isMore: boolean;
  //   pageNo: number;
  //   min?: number;
  //   max?: number;
  //   listProp?: string;
  // }
    getGoodsList: (obj:any) => dispatch(actionCreator.getGoodsListAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);