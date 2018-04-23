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
  },
  text: {
    borderRadius: 5,
    backgroundColor: ColorPalette.blazeOrange,
    color: ColorPalette.white,
    fontSize: 16,
    fontFamily: DEFAULT_FONT_FAMILY,
  },
});
