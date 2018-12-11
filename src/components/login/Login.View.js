// react stuff
import React from 'react';
import { Button, TextInput, Text, View } from 'react-native';
// styles
import Styles from './Login.Styles';
// components
import LoginTitle from './LoginTitle';
// constants
import Colors from '../../constants/Colors';

export default class Login extends React.Component {
    static navigationOptions = {
        headerTitle: <LoginTitle />
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>
                    Friday's Shop
                </Text>
                <TextInput style={Styles.input} textContentType="emailAddress" placeholder="email" />
                <TextInput style={Styles.input} placeholder="Text box" />
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
