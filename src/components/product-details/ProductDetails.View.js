// react stuff
import React, { Component } from 'react';
import { Button, Image, TextInput, Text, View } from 'react-native';
// styles
import Styles from './ProductDetails.Styles';
// constants
import Colors from '../../constants/Colors';

export default class ProductDetails extends Component {
    render() {
        const { icon, name, description } = this.props.navigation.getParam('item', {});

        return (
            <View style={[Styles.flexContainer, Styles.container]}>
                <View style={[Styles.titleContainer]}>
                    <Image style={Styles.icon} source={icon} />
                    <View style={Styles.flexContainer}>
                        <Text style={Styles.title} numberOfLines={1}>{name}</Text>
                    </View>
                </View>
                <View style={[Styles.flexContainer, Styles.descriptionContainer]}>
                    <Text style={Styles.description}>{description}</Text>
                    <Button
                        color={Colors.EpamBlue}
                        title='All products'
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
            </View>
        );
    }
};
