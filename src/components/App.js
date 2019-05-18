/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';

import { isIphoneX } from 'react-native-iphone-x-helper';


import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import store from '../redux/store';

StatusBar.setHidden(true);

const AppNavigator = createStackNavigator(
  {
    Main,
    Authentication,
    ChangeInfo,
    OrderHistory
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    if (isIphoneX()) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={store} >
            <AppContainer />
          </Provider >
        </SafeAreaView>
      );
    }
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
