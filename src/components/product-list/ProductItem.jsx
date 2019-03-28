import React, { Component } from 'react';
import { Button, Image, TextInput, Text, TouchableOpacity, View } from 'react-native';
// styles
import Styles from './ProductList.Styles';
// constants
import Colors from '../../constants/Colors';

export default class ProductItem extends Component {
    render() {
        const { icon, name, onPress } = this.props;

        return (
            <TouchableOpacity style={Styles.flexContainer} onPress={onPress}>
                <View style={[Styles.flexContainer, Styles.itemContainer]}>
                    <Image source={icon}></Image>
                    <View style={Styles.flexContainer}>
                        <Text style={[Styles.itemText, Styles.itemName]} numberOfLines={1}>{name}</Text>
                    </View>
                    <Text style={Styles.itemText}>{'>'}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};
