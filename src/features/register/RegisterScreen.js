// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from './styles';
import { goToLogin } from './actions';

type Props = {
  goToLogin: Function,
};

class RegisterView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.dispatch(NavigationActions.back());
          }}
        >
          <Text style={styles.btn_submit}> Go to Login </Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 30 }}> Register Screen </Text>
      </View>
    );
  }
}

const mapStatesToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  goToLogin() {
    dispatch(goToLogin());
  },
});

export const RegisterScreen = connect(mapStatesToProps, mapDispatchToProps)(
  RegisterView,
);
