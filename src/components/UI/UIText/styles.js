// @flow
import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../../helpers/ColorPalette';
import { DEFAULT_FONT_FAMILY } from '../../../common';

export const styles = StyleSheet.create({
  text: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 16,
    color: ColorPalette.mineShaft,
  },
});
