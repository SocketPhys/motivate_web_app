import {combineReducers} from 'redux';
import goals from './goals';
import user from './user';
const reducer = combineReducers({
  goals,
  user
})

export default reducer
