import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Menu extends Component {

    gotoAuthentication() {
        this.props.navigation.navigate('Authentication');
    }

    gotoChangeInfo() {
        this.props.navigation.navigate('ChangeInfo');
    }

    gotoOrderHistory() {
        this.props.navigation.navigate('OrderHistory');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A5A5AF' }}>
                <Text>Component Menu</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text>Go to ChangInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Menu;
