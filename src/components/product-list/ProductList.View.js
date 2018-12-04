// react stuff
import React, { Component } from 'react';
import { Button, Image, TextInput, Text, View } from 'react-native';
// components
import ProductItem from './ProductItem';
// styles
import Styles from './ProductList.Styles';
// constants
import Colors from '../../constants/Colors';

export default class ProductList extends Component {
    render() {
        const listItems = this.props.items.map((item, idx) => {
            return (
                <ProductItem
                    key={idx}
                    icon={item.icon}
                    name={item.name}
                    onPress={() => this.props.onItemPress(item)}
                />
            );
        });

        return (
            <View style={[Styles.flexContainer, Styles.container]}>
                <Text style={Styles.title}>Products</Text>
                {listItems}
            </View>
        );
    }
};
