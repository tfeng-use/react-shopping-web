import * as React from 'react';
// import { HomeWrapper } from './style';
import { Breadcrumb } from 'antd';


interface breadObj {
  name?: string;
  path?: string;
}

interface State {
}

// 定义props的接口
export interface Props {
  breadArr: Array<breadObj> 
}

class Bread extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { breadArr } = this.props;
    function getBread() {
      if (breadArr.length > 0) {
        return breadArr.map((item, index) => {
          if (!item.path) {
            return <Breadcrumb.Item key={index}><span>{item.name}</span></Breadcrumb.Item>
          } else {
            return (<Breadcrumb.Item key={index}>
              <a href={item.path}>{item.name}</a>
            </Breadcrumb.Item>)
          }
        })
      } else {
        return null;
      }
    }
    return (
      <Breadcrumb>
        {getBread()}
      </Breadcrumb>
    );
  }
}

export default Bread;