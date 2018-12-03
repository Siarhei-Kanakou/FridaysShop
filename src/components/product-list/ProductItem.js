// react stuff
import React, { Component } from 'react';
import { Button, Image, TextInput, Text, View } from 'react-native';
// styles
import Styles from './ProductList.Styles';
// constants
import Colors from '../../constants/Colors';

export default class ProductItem extends Component {
    render() {
        return (
            <View style={Styles.item}>
                <Image style={Styles.itemIcon} source={this.props.itemIcon}></Image>
                <View style={Styles.itemNameContainer}>
                    <Text style={Styles.itemName}>{this.props.itemName}</Text>
                </View>
                <Text style={{backgroundColor: 'yellow'}}>'>'</Text>
            </View>
        );
    }
};
