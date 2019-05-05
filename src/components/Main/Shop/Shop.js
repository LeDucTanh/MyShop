import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Text, Image, StyleSheet, View } from 'react-native';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import global from '../../../components/global';

import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            isLoaded: false,
            types: [],
            products: [],
            carts: []
        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.increaseQuantity = this.increaseQuantity.bind(this);
        global.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    componentDidMount() {
        initData()
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({
                    isLoaded: true,
                    types: type,
                    products: product
                });
            });
        getCart()
            .then(carts => this.setState({ carts }));
    }

    addProductToCart(product) {
        this.setState({ carts: this.state.carts.concat({ product, quantity: 1 }) },
            () => saveCart(this.state.carts)
        );
    }

    increaseQuantity(productId) {
        const newCarts = this.state.carts.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity + 1 };
        });
        this.setState({ carts: newCarts }, () => saveCart(this.state.carts));
    }

    decreaseQuantity(productId) {
        const { carts } = this.state;
        const index = carts.findIndex(e => e.product.id === productId);
        const quantity = carts[index].quantity;
        if (quantity !== 1) {
            carts[index].quantity = quantity - 1;
            this.setState({ carts }, () => saveCart(this.state.carts));
        }
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { iconStyle } = styles;
        const { isLoaded, types, products, carts, selectedTab } = this.state;
        if (!isLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }} >Loading...</Text>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Header onOpen={this.openMenu.bind(this)} />
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={selectedTab === 'home'}
                            title='Home'
                            onPress={() => this.setState({ selectedTab: 'home' })}
                            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                            titleStyle={{ fontFamily: 'Avenir' }}
                        >
                            <Home types={types} products={products} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={selectedTab === 'cart'}
                            title='Cart'
                            onPress={() => this.setState({ selectedTab: 'cart' })}
                            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                            renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                            badgeText={carts.length}
                            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                            titleStyle={{ fontFamily: 'Avenir' }}
                        >
                            <Cart carts={carts} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={selectedTab === 'search'}
                            title='Search'
                            onPress={() => this.setState({ selectedTab: 'search' })}
                            renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                            renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                            titleStyle={{ fontFamily: 'Avenir' }}
                        >
                            <Search />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={selectedTab === 'contact'}
                            title='Contact'
                            onPress={() => this.setState({ selectedTab: 'contact' })}
                            renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                            renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                            titleStyle={{ fontFamily: 'Avenir' }}
                        >
                            <Contact />
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    iconStyle: { width: 25, height: 25 }
});

export default Shop;
