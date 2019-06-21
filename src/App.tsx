import React from 'react';
// import { Button } from 'antd'
// import CSSModules from 'react-css-modules';
import Home from './view/home/index';
import store from './store/index';
import { Provider } from 'react-redux';

// import './App.css';
// let styled = require('./test.less');
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div id="app">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
