// @flow
import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  SwitchNavigator,
} from 'react-navigation';
// import { MainScreen } from '../features/main';
import { LoginScreen } from '../features/login';
import { RegisterScreen } from '../features/register';
import { ForgotScreen } from '../features/forgot';
import { HomeScreen } from '../features/home';
import { HistoryScreen } from '../features/history';
import { HelpScreen } from '../features/help';
import { SettingScreen } from '../features/setting';

import { SideMenu } from './components/SideMenu';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

export const homeNavigator = StackNavigator(
  {
    homeStack: { screen: HomeScreen },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'blue' },
      headerLeft: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
              style={{
                marginLeft: 10,
                marginRight: 10,
                width: 24,
                height: 24,
                alignItems: 'center',
              }}
              source={require('../../images/icons/ic-menu.png')}
            />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 16, marginLeft: 20 }}>
            Home
          </Text>
        </View>
      ),
    }),
  },
);
export const historyNavigator = StackNavigator(
  {
    historyStack: { screen: HistoryScreen },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'blue' },
      headerLeft: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
              style={{
                marginLeft: 10,
                marginRight: 10,
                width: 24,
                height: 24,
                alignItems: 'center',
              }}
              source={require('../../images/icons/ic-menu.png')}
            />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 16, marginLeft: 20 }}>
            History
          </Text>
        </View>
      ),
    }),
  },
);
export const settingNavigator = StackNavigator(
  {
    settingStack: { screen: SettingScreen },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'blue' },
      headerLeft: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
              style={{
                marginLeft: 10,
                marginRight: 10,
                width: 24,
                height: 24,
                alignItems: 'center',
              }}
              source={require('../../images/icons/ic-menu.png')}
            />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 16, marginLeft: 20 }}>
            Setting
          </Text>
        </View>
      ),
    }),
  },
);
export const helpNavigator = StackNavigator(
  {
    helpStack: { screen: HelpScreen },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'blue' },
      headerLeft: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
              style={{
                marginLeft: 10,
                marginRight: 10,
                width: 24,
                height: 24,
                alignItems: 'center',
              }}
              source={require('../../images/icons/ic-menu.png')}
            />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 16, marginLeft: 20 }}>
            Help
          </Text>
        </View>
      ),
    }),
  },
);

// drawer stack
const DrawerNavigation = DrawerNavigator(
  {
    home: {
      screen: homeNavigator,
    },
    history: {
      screen: historyNavigator,
    },
    help: {
      screen: helpNavigator,
    },
    setting: {
      screen: settingNavigator,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 320,
    transitionConfig: noTransitionConfig,
  },
);

// login stack
export const LoginStack = StackNavigator(
  {
    login: { screen: LoginScreen },
    register: { screen: RegisterScreen },
    forgot: { screen: ForgotScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'login',
  },
);

// Manifest of possible screens
export const AppNavigator = SwitchNavigator(
  {
    loginStack: { screen: LoginStack },
    main: { screen: DrawerNavigation },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'loginStack',
  },
);
