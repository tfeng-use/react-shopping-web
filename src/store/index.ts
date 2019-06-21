import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


// 创建一个store，并且应用thunk
// 通过composeWithDevTools使用dev调试工具
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;