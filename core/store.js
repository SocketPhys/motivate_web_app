import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {getGoals, addGoal, updateMoneyOnLine, updateCountdowns} from './actions/goals';
import {signup, login} from './actions/user';
// Centralized application state
// For more information visit http://redux.js.org/
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middlewares.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middlewares));

//store.dispatch(login({username: 'avik', password: 'pass'}));
store.dispatch(addGoal({title: 'new goal' , description: 'fuckery', deadline: Date.now()+1000*60*2, money: 1.00}));
setInterval(()=>store.dispatch(updateCountdowns()), 1000);
export default store;
