// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationActions } from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from './styles';
import { goToMain, goToRegister, goToForgot } from './actions';

type Props = {
  goToMain: Function,
  goToRegister: Function,
  goToForgot: Function,
};

class LoginView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.goToMain()}>
          <Text style={styles.btn_submit}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.goToRegister()}>
          <Text style={styles.btn_submit}> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.goToForgot()}>
          <Text style={styles.btn_submit}> Forgot </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStatesToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  goToMain() {
    dispatch(goToMain());
  },
  goToRegister() {
    dispatch(goToRegister());
  },
  goToForgot() {
    dispatch(goToForgot());
  },
});

export const LoginScreen = connect(mapStatesToProps, mapDispatchToProps)(
  LoginView,
);
