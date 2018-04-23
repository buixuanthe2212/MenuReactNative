// @flow
import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { styles } from './styles';
import { UIText } from '../../components/UI/UIText';

class ItemMenuView extends Component<{
  title: string,
  icon: any,
  onPress: any,
}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={item => this.props.onPress(item)}>
          <View style={styles.view_item}>
            <Image source={this.props.icon} style={styles.icon} />
            <UIText text={this.props.title} style={styles.text} />
          </View>
        </TouchableOpacity>
        <View style={styles.view_line} />
      </View>
    );
  }
}

export const ItemMenu = ItemMenuView;
