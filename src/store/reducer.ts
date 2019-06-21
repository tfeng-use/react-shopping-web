import { combineReducers } from 'redux'
import homeReducer from '../view/home/store/reducer'

export default combineReducers({
  home: homeReducer
})