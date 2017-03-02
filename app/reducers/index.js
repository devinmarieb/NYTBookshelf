import { combineReducers } from 'redux'
import mainReducer from './main-reducer'


const allReducers = combineReducers({
  mainReducer,
})


export default allReducers;
