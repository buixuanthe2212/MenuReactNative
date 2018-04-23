// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from './styles';

class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
      </View>
    );
  }
}

const mapStatesToProps = () => ({});

const mapDispatchToProps = () => ({});
export const HomeScreen = connect(mapStatesToProps, mapDispatchToProps)(
  HomeView,
);
