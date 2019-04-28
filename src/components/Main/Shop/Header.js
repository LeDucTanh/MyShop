import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { wrapper, row1, textInput, icon, title } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={title}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View>
                <TextInput 
                    style={textInput}
                    placeholder='What do you want to buy ?'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { height: height / 23, backgroundColor: '#FFF', paddingLeft: 10 },
    icon: { width: 25, height: 25 },
    title: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 }
});
