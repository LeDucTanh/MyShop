import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {
    gotoDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#D6D6D6' }}>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CartView;
