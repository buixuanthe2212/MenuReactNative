// @flow
import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../../../helpers/ColorPalette';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  image: {
    borderColor: ColorPalette.white,
    borderWidth: 2,
  },
});
