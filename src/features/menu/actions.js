// @flow
import { NavigationActions } from 'react-navigation';

export const logout = () => NavigationActions.navigate({ routeName: 'login' });

export const goToHomeScreen = () => {
  NavigationActions.navigate({ routeName: 'home' });
};

export const goToSettingScreen = () =>
  NavigationActions.navigate({ routeName: 'setting' });

export const goToHelpScreen = () =>
  NavigationActions.navigate({ routeName: 'help' });

export const goToHistoryScreen = () =>
  NavigationActions.navigate({ routeName: 'history' });
