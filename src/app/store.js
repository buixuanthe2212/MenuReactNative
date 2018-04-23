// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import navMiddleware from './navMiddleware';
import appReducer from './appReducer';

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(navMiddleware, thunk)),
);
