import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const AppNavigator = createStackNavigator(
    {
        CartView,
        ProductDetail
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Cart extends Component {
    render() {
        const { carts } = this.props;
        const screenProps = {
            carts
        };
        return <AppContainer screenProps={screenProps} />;
    }
}
