'use strict';

// react stuff
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// constants
import RouteNames from '../../constants/RouteNames';
// styles
import Styles from './ProductList.Styles';

export default class ProductList extends React.Component {
    render() {
        return (
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Products</Text>
                <TouchableOpacity
                    onPress={() => this.props.onCartClick()}
                >
                    <Text style={[Styles.headerText, Styles.cart]}>Cart</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
