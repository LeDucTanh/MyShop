import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class HomeView extends Component {
    gotoProductDetail() {
        this.props.navigation.navigate('ProductDetail');
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigation={this.props.navigation} />
                <TopProduct />
            </ScrollView>
        );
    }
}

export default HomeView;
