// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from './styles';

type Props = {};

class ForgotView extends Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.dispatch(NavigationActions.back());
          }}
        >
          <Text style={styles.btn_submit}> back</Text>
        </TouchableOpacity>
        <Text style={styles.btn_submit}> Forgot </Text>
      </View>
    );
  }
}

const mapStatesToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ForgotScreen = connect(mapStatesToProps, mapDispatchToProps)(
  ForgotView,
);
