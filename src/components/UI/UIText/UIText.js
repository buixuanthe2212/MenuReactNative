// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export class UIText extends Component<{
  style?: any,
  text: string,
}> {
  render() {
    return (
      <Text style={[styles.text, this.props.style]} {...this.props}>
        {this.props.text}
      </Text>
    );
  }
}
