// @flow
import { NavigationActions } from 'react-navigation';
// import { Dispatch } from 'redux';
// import * as ActionType from './actionTypes';

export const closeLoginScreen = () => {
  NavigationActions.navigate({
    routeName: 'main',
    transitionStyle: 'inverted',
  });
};

export const goToMain = () => NavigationActions.navigate({ routeName: 'main' });

export const goToRegister = () =>
  NavigationActions.navigate({ routeName: 'register' });

export const goToForgot = () =>
  NavigationActions.navigate({ routeName: 'forgot' });
