'use strict';

// react stuff
import React from 'react';
import { Button, TextInput, Text, View } from 'react-native';
// styles
import Styles from './Login.Styles';
// components
import Header from './Login.Header';
// constants
import Colors from '../../constants/Colors';

export default class Login extends React.Component {
    static navigationOptions = {
        header: <Header />
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>
                    Friday's Shop
                </Text>
                <TextInput style={Styles.input} textContentType="emailAddress" placeholder="email" />
                <TextInput style={Styles.input} placeholder="password" />
                <View style={Styles.innerContainer}>
                    <Button
                        color={Colors.EpamBlue}
                        title="Login"
                        onPress={() => this.props.navigation.navigate('ProductList')}
                    />
                </View>
            </View>
        );
    }
};
