import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, itemName } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper >
                        <View>
                            <Image source={littleIcon} style={imageStyle} />
                            <Text style={itemName}>Little Dress</Text>
                        </View>
                        <View>
                            <Image source={maxiIcon} style={imageStyle} />
                            <Text style={itemName}>Maxi Dress</Text>
                        </View>
                        <View>
                            <Image source={partyIcon} style={imageStyle} />
                            <Text style={itemName}>Party Dress</Text>
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth * 465) / 933;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    },
    itemName: {
        position: 'absolute',
        bottom: 0,
        top: imageHeight / 2,
        left: (width / 2) - 65,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Avenir',
        fontSize: 20,
    }
});
