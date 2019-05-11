import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import signIn from '../../api/signIn';
import global from '../global';
import saveToken from '../../api/saveToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(res => {
            global.onSignIn(res.user);
            this.props.backToMain();
            saveToken(res.token);
        })
        .catch(err => console.log(err));
    } 

    render() {
        const { inputStyle, bigBtnStyle, bigBtnTextStyle } = styles;
        const { email, password } = this.state;
        return ( 
            <View>
                <TextInput 
                    style={inputStyle} 
                    placeholder='Enter your email' 
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder='Enter your password'
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigBtnStyle} onPress={this.onSignIn.bind(this)}>
                    <Text style={bigBtnTextStyle}>SIGN IN NOW</Text>
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
