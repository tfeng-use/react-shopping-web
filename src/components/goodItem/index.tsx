import * as React from 'react';
import { GoodItemWrapper } from './style';

interface Msg {
  id: string,
  imgPath: string,
  name: string,
  currentPrice: string
}

interface State {
}

// 定义props的接口
export interface Props {
  msg: Msg
}

class GoodItem extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { msg } = this.props;
    return (
      <GoodItemWrapper>
        <img src={msg.imgPath} alt="shopping"/>
        <p className="name">{msg.name}</p>
        <p className="price">{msg.currentPrice}元</p>
        <button>加入购物车</button>
      </GoodItemWrapper>
    );
  }
}

export default GoodItem;