import { combineReducers } from 'redux'
import bookshelfReducer from './bookshelf-reducer'


const allReducers = combineReducers({
  bookshelfReducer,
})


export default allReducers;
