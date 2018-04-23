// @flow
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export class RoundAvatar extends Component<{
  size: number,
  imageUri: string,
  style: any,
}> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          style={[
            styles.image,
            {
              width: this.props.size,
              height: this.props.size,
              borderRadius: this.props.size / 2,
            },
          ]}
          source={{ uri: this.props.imageUri }}
          resizeMode="contain"
        />
      </View>
    );
  }
}
