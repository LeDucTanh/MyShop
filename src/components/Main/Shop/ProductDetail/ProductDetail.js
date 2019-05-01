import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class ProductDetail extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <Text>Product Detail</Text>
            </SafeAreaView>
        );
    }
}
