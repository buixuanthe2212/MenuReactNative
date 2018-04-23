// @flow
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { MenuScreen } from '../../../features/menu';

export class SideMenu extends Component {
  navigateToScreen = (route: string) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return <MenuScreen navigation={this.props.navigation} />;
  }
}
