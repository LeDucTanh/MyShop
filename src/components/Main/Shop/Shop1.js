import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

import ListProduct from './ListProduct/ListProduct';

const HomeStack = createStackNavigator({
    Home,
    ListProduct
},
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const CartStack = createStackNavigator({
    Cart
},
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const SearchStack = createStackNavigator({
    Search
},
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const ContactStack = createStackNavigator({
    Contact
},
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const styles = StyleSheet.create({
    iconStyle: { width: 20, height: 20 }
});

const App = createBottomTabNavigator(
    {
        //Defination of Navigaton bottom options
        Home: { screen: HomeStack },
        Cart: { screen: CartStack },
        Search: { screen: SearchStack },
        Contact: { screen: ContactStack }

    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? homeIconS
                                    : homeIcon
                            }
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    );
                } else if (routeName === 'Cart') {
                    return (
                        <Image
                            source={
                                focused
                                    ? cartIconS
                                    : cartIcon
                            }
                            style={styles.iconStyle}
                        />
                    );
                } else if (routeName === 'Search') {
                    return (
                        <Image
                            source={
                                focused
                                    ? searchIconS
                                    : searchIcon
                            }
                            style={styles.iconStyle}
                        />
                    );
                } else if (routeName === 'Contact') {
                    return (
                        <Image
                            source={
                                focused
                                    ? contactIconS
                                    : contactIcon
                            }
                            style={styles.iconStyle}
                        />
                    );
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#34B089',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'red',
            showIcon: true
        }
    }
);

const Container = createAppContainer(App);

class Shop1 extends Component {

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <Container />
            </View>
        );
    }
}

export default Shop1;
