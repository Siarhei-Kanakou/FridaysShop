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
import RouteNames from '../../constants/RouteNames';
// api
import { authenticate } from '../../api/Authentication';

export default class Login extends React.Component {
    static navigationOptions = {
        header: <Header />
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>
                    Friday's Shop
                </Text>
                <TextInput
                    style={Styles.input}
                    textContentType="emailAddress"
                    placeholder="email"
                    onChangeText={username => this.setState({ username })}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="password"
                    onChangeText={password => this.setState({ password })}
                />
                <View style={Styles.innerContainer}>
                    <Button
                        color={Colors.EpamBlue}
                        title="Login"
                        onPress={() => {
                            const { username, password } = this.state;

                            return authenticate(username, password)
                                .then(() => this.props.navigation.navigate(RouteNames.ProductList))
                                .catch(error => console.error(error.message));
                        }}
                    />
                </View>
            </View>
        );
    }
};
