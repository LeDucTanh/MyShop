import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileICon from '../../media/temp/profile.png';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: true
        };
    }

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
        const { container, profile, 
            buttonStyle, buttonText, 
            btnSigninStyle, btnTextSignin,
            loginContainer, username
        } = styles;
        const logoutJSX = (
            <View>
                <TouchableOpacity style={buttonStyle} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={buttonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}>Le Duc Tanh</Text>
                <View>
                    <TouchableOpacity style={btnSigninStyle} onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={btnTextSignin}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSigninStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={btnTextSignin}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSigninStyle} >
                        <Text style={btnTextSignin}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <Image source={profileICon} style={profile} />
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3, 
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 20
    },
    buttonStyle: {
        height: 50,
        paddingHorizontal: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#34B089',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    btnSigninStyle: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10
    },
    btnTextSignin: {
        color: '#34B089',
        fontSize: 15,
        fontFamily: 'Avenir'
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});

export default Menu;
