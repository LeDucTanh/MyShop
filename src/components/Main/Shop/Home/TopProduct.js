import React, { Component } from 'react';
import { 
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ListView 
} from 'react-native';

const url = 'http://localhost/api/images/product/';

export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const { products } = this.props;
        this.state = {
            dataSource: ds.cloneWithRows(products)
        };
    }
    gotoDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail', {
            product
        });
    }
    render() {
        const { container, titleContainer, 
            title, body, productContainer,
            productImage, productName, productPrice 
        } = styles;
        return (
            <View style={container} >
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <ListView 
                    contentContainerStyle={body} 
                    dataSource={this.state.dataSource}
                    renderRow={product => (
                        <TouchableOpacity style={productContainer} onPress={() => this.gotoDetail(product)}>
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={productImage} />
                            <Text style={productName}>{product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth * 452) / 361;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    }, 
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        borderWidth: 1,
        borderColor: '#D3D3CF',
        borderRadius: 5
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
