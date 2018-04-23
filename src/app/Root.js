// @flow
import {
  addNavigationHelpers,
  navigation,
  NavigationActions,
} from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Provider, connect, Dispatch } from 'react-redux';
import React, { Component } from 'react';
import store from './store';
import { AppNavigator } from '../navigation';

const addListener = createReduxBoundAddListener('root');

// $FlowFixMe
console.disableYellowBox = true;

class App extends React.Component<{ dispatch: Dispatch, nav: navigation }> {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
