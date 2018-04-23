// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
// import { NavigationActions } from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from './styles';

class HelpView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Help </Text>
      </View>
    );
  }
}

const mapStatesToProps = () => ({});

const mapDispatchToProps = () => ({});
export const HelpScreen = connect(mapStatesToProps, mapDispatchToProps)(
  HelpView,
);
