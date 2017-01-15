import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Centralized application state
// For more information visit http://redux.js.org/
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middlewares.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;
