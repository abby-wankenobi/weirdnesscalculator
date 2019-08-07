import { combineReducers } from 'redux';
import likesReducer from './likesReducer';

export default combineReducers({
  likes: likesReducer
})
