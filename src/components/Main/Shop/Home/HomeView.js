import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class HomeView extends Component {
    render() {
        const { screenProps, navigation } = this.props;
        const { types } = screenProps;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigation={navigation} types={types} />
                <TopProduct navigation={navigation} />
            </ScrollView>
        );
    }
}

export default HomeView;
