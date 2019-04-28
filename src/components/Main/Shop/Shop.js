import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { SafeAreaView } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';

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

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { iconStyle } = styles;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title='Home'
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        titleStyle={{ fontFamily: 'Avenir' }}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title='Cart'
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText='1'
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        titleStyle={{ fontFamily: 'Avenir' }}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
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
                        selected={this.state.selectedTab === 'contact'}
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
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: { width: 25, height: 25 }
});

export default Shop;
