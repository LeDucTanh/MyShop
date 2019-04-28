import React, { Component } from 'react';
// import { Text, View, Button } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {

    gotoAuthentication() {
        this.props.navigation.navigate('Authentication');
    }

    gotoChangeInfo() {
        this.props.navigation.navigate('ChangeInfo');
    }

    gotoOrderHistory() {
        this.props.navigation.navigate('OrderHistory');
    }

    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }

    render() {
        const { navigation } = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigation={navigation} />}
                tapToClose
                openDrawerOffset={0.4}
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
