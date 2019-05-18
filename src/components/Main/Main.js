import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import refreshToken from '../../api/refreshToken';
import global from '../global';

class Main extends Component {
    componentDidMount() {
        getToken()
        .then(token => checkLogin(token))
        .then(res => global.onSignIn(res.user))
        .catch(err => console.log('Checking login happend error', err));

        setInterval(() => {
            getToken()
                .then(token => refreshToken(token));
        }, 60 * 1000);
    }

    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }

    render() {
        const { navigation } = this.props;
        this.props.getNavigation(navigation);
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

export default connect({ actionCreators })(Main);
