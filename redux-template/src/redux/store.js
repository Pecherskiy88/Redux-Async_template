import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import timerReducer from './timerReducer';
import postsReducer from './postsReducer';

// Middleware
const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;

// Пример мидлвара thunk
// const thunk = store => next => action =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action);
