// @flow
import { START_LOADING, STOP_LOADING } from './actionType';
import { SET_SELECTED_TAB } from '../../navigation/actionType';

export const commonReducer = (
  state: Object = {
    isLoading: false,
  },
  action: Object => Object,
) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_SELECTED_TAB:
      return {
        ...state,
      };
    default:
      return state;
  }
};
