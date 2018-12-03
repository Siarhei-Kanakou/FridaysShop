// react stuff
import React, { Component } from 'react';
import { Button, Image, TextInput, Text, View } from 'react-native';
// components
import ProductItem from './ProductItem';
// styles
import Styles from './ProductList.Styles';
// constants
import Colors from '../../constants/Colors';

const items = [
    require('../../assets/img/map.png'),
    require('../../assets/img/smiling-face.png'),
    require('../../assets/img/star.png'),
    require('../../assets/img/camera.png'),
    require('../../assets/img/gift.png'),
    require('../../assets/img/medic-sign.png'),
    require('../../assets/img/cart.png'),
    require('../../assets/img/rugby.png'),
];

export default class ProductList extends Component {
    render() {
        const listItems = items.map((item, idx) => {
            return <ProductItem itemIcon={item} itemName={`Product #${idx + 1}`} key={idx} />
        });

        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>Products</Text>
                {listItems}
            </View>
        );
    }
};
