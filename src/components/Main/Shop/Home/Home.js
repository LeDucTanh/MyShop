import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';

const AppNavigator = createStackNavigator(
    {
        HomeView,
        ListProduct
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Home extends Component {
    render() {
        return <AppContainer />;
    }
}
