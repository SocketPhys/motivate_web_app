import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {getGoals, addGoal, updateMoneyOnLine} from './actions/goals';
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

store.dispatch(addGoal({title: 'FUCKMYASS'+Math.random(), deadline: Date.now()+1000*60*2, money: Math.random()*10, description:'lkjhk'}))
setTimeout(function(){console.log('CALLBACK MOTHERFUCKER');store.dispatch(updateMoneyOnLine())}, 1000);
//store.dispatch(signup({username: 'aFJsdf', firstName: 'Nihal', lastName: 'George', password: 'brick<3;)'}))
export default store;
