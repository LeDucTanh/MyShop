import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

const AppNavigator = createStackNavigator(
    {
        SearchView,
        ProductDetail
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Search extends Component {
    render() {
        return <AppContainer />;
    }
}
