import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../helpers/ColorPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switch_account_wrapper: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: ColorPalette.athensGray,
  },
  logout_wrapper: {
    marginTop: 16,
  },
  view_item: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
  },
  icon: {
    marginRight: 15,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 15,
    color: '#17364d',
  },
  view_line: {
    borderBottomColor: '#a8b0b5',
    borderBottomWidth: 1,
  },
});
