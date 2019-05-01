import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    goBack() {
        const { navigation } = this.props;
        navigation.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
