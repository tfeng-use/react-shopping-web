import * as React from 'react';
import { LoginWrapper } from './style'
let imgsrc = require('./TW.png');

// 定义props的接口
export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
  testNumber: number;
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1, testNumber: 1 };
  }
  // 通过箭头函数的形式绑定this
  // onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  // onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  // onChangeName= () => {
  //   let number = this.state.testNumber;
  //   this.setState({
  //     testNumber: number
  //   })
  //   setTimeout(() => {
  //     console.log(this.state.testNumber);
  //   })
  // }
  
  // updateEnthusiasm(currentEnthusiasm: number) {
  //   this.setState({ currentEnthusiasm });
  // }

  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <LoginWrapper>
        <header className="header">
          <div className="content w">
            <a className='img-wrapper' href="javescript:void(0)">
              <img src={imgsrc} alt="Tw"/>
            </a>
            <div className="login float_r">
              <a href="javescript:void(0)">Login</a>
              {name}
            </div>
          </div>
        </header>
      </LoginWrapper>


    );
  }
}

export default Header;

