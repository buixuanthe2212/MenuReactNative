// @flow
// import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './navigator';

export const navReducer = (state: Object, action: Object) => {
  let nextState: Object;
  switch (action.type) {
    // case LOGIN_SUCCESS:
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: 'main' }),
    //     state,
    //   );
    //   break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
