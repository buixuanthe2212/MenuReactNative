// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { UIText } from '../../components/UI/UIText';
// import { NavigationActions } from 'react-navigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { styles } from './styles';

class MainView extends Component {
  static navigation;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DrawerOpen');
            }}
          >
            <Image
              style={styles.icon}
              source={require('../../../images/icons/ic-menu.png')}
            />
          </TouchableOpacity>
          <UIText text="Home" style={styles.text} />
        </View>
        <Text> Screen full </Text>
      </View>
    );
  }
}

const mapStatesToProps = () => ({});

const mapDispatchToProps = () => ({});
export const MainScreen = connect(mapStatesToProps, mapDispatchToProps)(
  MainView,
);
