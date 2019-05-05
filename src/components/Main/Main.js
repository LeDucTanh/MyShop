import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';

import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
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
                    styles={{ backgroundColor: 'black' }}
                >
                    <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
                </Drawer>
            </View>
        );
    }
}
