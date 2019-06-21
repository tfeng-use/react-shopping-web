import * as React from 'react';
import { SortWrapper } from './style';
import { Icon } from 'antd'

interface State {
}

// 定义props的接口
export interface Props {
  
}

class Bread extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SortWrapper>
        Sort by: 
        <a className="default" href="http:www.baidu.com">Default</a>
        <a className="price" href="http:www.baidu.com">Price 
          <Icon type="arrow-up" />
        </a>
      </SortWrapper>
    );
  }
}

export default Bread;