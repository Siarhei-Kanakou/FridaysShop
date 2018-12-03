// react stuff
import React, { Component } from 'react';
import { Button, Image, TextInput, Text, TouchableOpacity, View } from 'react-native';
// styles
import Styles from './ProductList.Styles';
// constants
import Colors from '../../constants/Colors';

export default class ProductItem extends Component {
    render() {
        return (
            <TouchableOpacity style={Styles.flexContainer}>
                <View style={[Styles.flexContainer, Styles.itemContainer]}>
                    <Image source={this.props.itemIcon}></Image>
                    <View style={Styles.flexContainer}>
                        <Text style={[Styles.itemText, Styles.itemName]}>{this.props.itemName}</Text>
                    </View>
                    <Text style={Styles.itemText}>{'>'}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};
