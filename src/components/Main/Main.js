import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';

import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import global from '../global';

export default class Main extends Component {
    componentDidMount() {
        getToken()
        .then(token => checkLogin(token))
        .then(res => global.onSignIn(res.user))
        .catch(err => console.log('Check login happend error', err));
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
            <View style={{ flex: 1 }}>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<Menu navigation={navigation} />}
                    tapToClose
                    openDrawerOffset={0.4}
                >
                    <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
                </Drawer>
            </View>
        );
    }
}
