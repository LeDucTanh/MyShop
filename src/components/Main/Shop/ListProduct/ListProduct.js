import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListProduct extends Component {
    goBack() {
        const { navigation } = this.props;
        navigation.pop();
    }

    gotoDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
