// @flow
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export class UIButton extends Component<{
  title: string,
  style?: any,
  textStyle?: any,
  onPress?: () => any,
}> {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
