import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './components/login/Login.View';
import ProductList from './components/product-list/ProductList.View';
import ProductDetails from './components/product-details/ProductDetails.View';

const items = [
    require('./assets/img/map.png'),
    require('./assets/img/smiling-face.png'),
    require('./assets/img/star.png'),
    require('./assets/img/camera.png'),
    require('./assets/img/gift.png'),
    require('./assets/img/medic-sign.png'),
    require('./assets/img/cart.png'),
    require('./assets/img/rugby.png'),
].map((item, idx) => {
    return { icon: item, name: `Product ${idx + 1}` }
});

export default class App extends Component<Props> {
    render() {
        return (
            <ProductList items={items} />
            //<ProductDetails />
        );
    }
}
