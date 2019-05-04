import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

const AppNavigator = createStackNavigator(
    {
        HomeView, 
        ListProduct,
        ProductDetail
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
        const { types, products } = this.props;
        const screenProps = {
            types,
            products
        };
        return <AppContainer screenProps={screenProps} />;
    }
}
