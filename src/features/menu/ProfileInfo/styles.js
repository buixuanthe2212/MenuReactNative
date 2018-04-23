// @flow
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: 'row',
  },
  avatar: {
    flex: 4,
    marginTop: 16,
  },
  info: {
    flex: 6,
  },
  info_name: {
    marginTop: 30,
    fontSize: 17,
    color: 'black',
  },
  info_email: {
    fontSize: 15,
  },
  info_edit_button: {
    height: 22,
  },
  info_help_button: {
    marginTop: 8,
    height: 32,
    width: 132,
  },
  info_help_text: {
    fontSize: 13,
  },
});
