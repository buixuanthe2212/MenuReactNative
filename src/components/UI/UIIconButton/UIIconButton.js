// @flow
import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

export class UIIconButton extends Component<{
  title: string,
  style?: any,
  textStyle?: any,
  onPress?: () => any,
  icon: any,
}> {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <Image style={styles.icon} source={this.props.icon} />
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
