// @flow
import { SET_SELECTED_TAB } from './actionType';

export const setSelectedTab = (selectedIndex: number) => ({
  type: SET_SELECTED_TAB,
  selectedIndex,
});
