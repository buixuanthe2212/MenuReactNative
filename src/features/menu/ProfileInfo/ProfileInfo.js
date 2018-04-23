// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { RoundAvatar } from '.';
import { styles } from './styles';
import { UIText } from '../../../components/UI';

class ProfileInfoView extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <RoundAvatar
          style={styles.avatar}
          size={76}
          imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNQ2yyZICBI_pcqc_KxT55FYvlpE8TtOKTlVuNuVyjbr1BSwLhw"
        />
        <View style={styles.info}>
          <UIText style={styles.info_name} text="Thôi Hiển Chính" />
          <UIText style={styles.info_email} text="the.bx@neo-lab.vn" />
        </View>
      </View>
    );
  }
}

export const ProfileInfo = ProfileInfoView;
