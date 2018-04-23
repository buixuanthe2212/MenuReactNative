// @flow
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  toolbar: {
    height: 48,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    width: 24,
    height: 24,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
