// @flow
import * as ActionType from './actionTypes';

export default (
  state: Object = {
    isLogIn: false,
  },
  action: Object => Object,
) => {
  switch (action.type) {
    case ActionType.LOGIN_START:
      return {
        ...state,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLogIn: true,
      };

    default:
      return state;
  }
};
