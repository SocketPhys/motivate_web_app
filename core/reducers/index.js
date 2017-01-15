import {combineReducers} from 'redux';
import goals from './goals';
import user from './user';
import stats from './stats';
const reducer = combineReducers({
  goals,
  user,
  stats
})

export default reducer
