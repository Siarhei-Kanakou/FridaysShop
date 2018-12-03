// react stuff
import React, { Component } from 'react';
import { Button, Image, TextInput, Text, View } from 'react-native';
// styles
import Styles from './Login.Styles';
// constants
import Colors from '../../constants/Colors';

export default class Login extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.innerContainer}>
                    <Image source={require('../../assets/img/smiling-face.png')} />
                </View>
                <Text style={Styles.title}>
                    Friday's Shop
                </Text>
                <TextInput style={Styles.input} textContentType="emailAddress" placeholder="email" />
                <TextInput style={Styles.input} placeholder="Text box" />
                <View style={Styles.innerContainer}>
                    <Button color={Colors.EpamBlue} title="Login" onPress={() => {}}/>
                </View>
            </View>
        );
    }
};
