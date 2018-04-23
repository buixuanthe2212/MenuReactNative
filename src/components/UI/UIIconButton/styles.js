// @flow
import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../../helpers/ColorPalette';
import { DEFAULT_FONT_FAMILY } from '../../../common';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorPalette.blazeOrange,
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    width: 16,
    height: 16,
    marginRight: 8,
    marginLeft: 8,
  },
  text: {
    color: ColorPalette.white,
    fontSize: 16,
    fontFamily: DEFAULT_FONT_FAMILY,
  },
});
