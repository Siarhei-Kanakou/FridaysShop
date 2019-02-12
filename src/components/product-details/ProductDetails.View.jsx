'use strict';

// react stuff
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Header from './ProductDetails.Header';
// styles
import Styles from './ProductDetails.Styles';
// constants
import Colors from '../../constants/Colors';

export default class ProductDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        const { icon, name } = navigation.getParam('item', {});

        return {
            header: <Header icon={icon} name={name} />,
        };
    }

    render() {
        const { description } = this.props.navigation.getParam('item', {});

        return (
            <View style={Styles.descriptionContainer}>
                <Text style={Styles.description}>{description}</Text>
                <Button
                    color={Colors.EpamBlue}
                    title='All products'
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
};
