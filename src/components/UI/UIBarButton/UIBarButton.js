// @flow
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export class UIBarButton extends Component<{
  icon: any,
  onPress: Function,
}> {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={styles.container}
      >
        <Image source={this.props.icon} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
