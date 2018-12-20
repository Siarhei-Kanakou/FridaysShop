'use strict';

// react stuff
import React from 'react';
import { Button, ModalView, TextInput, Text, View } from 'react-native';
// styles
import Styles from './Login.Styles';
// components
import Header from './Login.Header';
import LoginErrorModal from './LoginError.Modal';
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
            error: '',
        };
    }

    render() {
        const { username, password, error } = this.state;

        return (
            <View style={Styles.container}>
                <LoginErrorModal
                    isVisible={!!error}
                    message={error}
                    onClosePress={() => this.showErrorModal()}
                />
                <Text style={Styles.title}>
                    Friday's Shop
                </Text>
                <TextInput
                    style={Styles.input}
                    textContentType="emailAddress"
                    placeholder="email"
                    value={username}
                    onChangeText={username => this.setState({ username })}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="password"
                    value={password}
                    onChangeText={password => this.setState({ password })}
                />
                <View style={Styles.innerContainer}>
                    <Button
                        color={Colors.EpamBlue}
                        title="Login"
                        onPress={() => this.onLoginPress()}
                    />
                </View>
            </View>
        );
    }

    onLoginPress() {
        const { username, password } = this.state;

        return authenticate(username, password)
            .then(() => this.props.navigation.navigate(RouteNames.ProductList))
            .catch((error) => {
                this.showErrorModal(error.message || error);
            });
    }

    showErrorModal(message = '') {
        this.setState({ error: message });
    }
};
