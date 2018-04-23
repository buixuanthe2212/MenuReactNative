// @flow
import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../../helpers/ColorPalette';
import { DEFAULT_FONT_FAMILY } from '../../../common';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  text: {
    color: ColorPalette.dodgerBlue,
    fontSize: 12,
    fontFamily: DEFAULT_FONT_FAMILY,
  },
});
