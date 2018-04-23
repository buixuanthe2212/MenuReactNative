// @flow
import { NavigationActions } from 'react-navigation';
// import { Dispatch } from 'redux';
// import * as ActionType from './actionTypes';

export const goToLogin = () =>
  NavigationActions.navigate({ routeName: 'login' });
