import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class SignIn extends Component {
    render() {
        const { inputStyle, bigBtnStyle, bigBtnTextStyle } = styles;
        return (
            <View>
                <TextInput style={inputStyle} placeholder='Enter your email' />
                <TextInput style={inputStyle} placeholder='Enter your password' />
                <TouchableOpacity style={bigBtnStyle}>
                    <Text style={bigBtnTextStyle} >SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
       inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigBtnStyle: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigBtnTextStyle: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        color: '#fff'
    }
});
