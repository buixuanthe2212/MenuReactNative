// @flow
import { combineReducers } from 'redux';
import { navReducer } from '../navigation/reducer';
// import { exploreReducer } from '../features/explore';

export default combineReducers({
  nav: navReducer,
});
