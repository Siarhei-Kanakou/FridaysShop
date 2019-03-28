import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
// styles
import Styles from './ProductDetails.Styles';

export default class Header extends Component {
    render() {
        const { icon, name } = this.props;

        return (
            <View style={Styles.titleContainer}>
                <Image style={Styles.icon} source={icon} />
                <View style={Styles.flexContainer}>
                    <Text style={Styles.title} numberOfLines={1}>{name}</Text>
                </View>
            </View>
        );
    }
};
