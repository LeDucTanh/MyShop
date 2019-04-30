import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: false
        };
    }

    signIn() {
        this.setState({
            isSignIn: true
        });
    }

    signUp() {
        this.setState({
            isSignIn: false
        });
    }

    backToMain() {
        const { navigation } = this.props;
        navigation.pop();
    }

    render() {
        const { 
            row1, icon,
            title, container,
            controlStyle, signInStyle,
            signUpStyle, activeStyle,
            inactiveStyle, inputStyle,
            bigBtnStyle, bigBtnTextStyle
        } = styles;
        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder='Enter your email' />
                <TextInput style={inputStyle} placeholder='Enter your password' />
                <TouchableOpacity style={bigBtnStyle}>
                    <Text style={bigBtnTextStyle} >SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder='Enter your name' />
                <TextInput style={inputStyle} placeholder='Enter your email' />
                <TextInput style={inputStyle} placeholder='Enter your password' />
                <TextInput style={inputStyle} placeholder='Re-enter your password' />
                <TouchableOpacity style={bigBtnStyle}>
                    <Text style={bigBtnTextStyle} >SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.backToMain.bind(this)}>
                        <Image source={icBack} style={icon} />
                    </TouchableOpacity>
                    <Text style={title}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View>
                { mainJSX }
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={isSignIn ? inactiveStyle : activeStyle} >SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#3EB377',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: { 
        width: 30, 
        height: 30 
    },
    title: { 
        color: '#FFF', 
        fontFamily: 'Avenir',
        fontSize: 30 
    }, 
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EB377'
    },
    signInStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginRight: 1
    },
    signUpStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: 1
    },
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
