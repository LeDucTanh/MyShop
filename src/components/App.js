/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        title: 'Main',
      })
    },
    Authentication: {
      screen: Authentication,
      navigationOptions: () => ({
        title: 'Authentication',
      })
    },
    ChangeInfo: {
      screen: ChangeInfo,
      navigationOptions: () => ({
        title: 'ChangeInfo',
      })
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: () => ({
        title: 'OrderHistory',
      })
    }
  },
  {
    initialRouteName: 'Main'
  }
);

createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
