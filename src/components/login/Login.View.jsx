import React from 'react';
import {
    Alert,
    AsyncStorage,
    Button,
    LayoutAnimation,
    Modal,
    NativeModules,
    NetInfo,
    TextInput,
    Text,
    Vibration,
    View,
} from 'react-native';
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

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


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
            buttonTitle: 'Login',
            buttonColor: Colors.EpamBlue
        };
    }

    componentDidMount() {
        AsyncStorage.multiGet(['username', 'password'])
            .then(([usernameState, passwordState]) => {
                const [ , username ] = usernameState;
                const [ , password ] = passwordState;

                if (username && password) {
                    this.setState({ username, password })
                    this.onLoginPress();
                }
            });
    }

    render() {
        const { username, password, error } = this.state;
        const modal = !!error && <LoginErrorModal message={error} onClosePress={() => this.showErrorModal()} />;

        return (
            <View style={Styles.container}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={!!error}
                    onRequestClose={() => {}}
                >
                    {modal}
                </Modal>
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
                        color={this.state.buttonColor}
                        title={this.state.buttonTitle}
                        onPress={() => this.onLoginPress()}
                    />
                </View>
            </View>
        );
    }

    onLoginPress() {
        return NetInfo.isConnected.fetch()
            .then((isConnected) => {
                if (isConnected) {
                    return this.auth();
                }
                return this.showNoConnectionDialog();
            })
    }

    auth() {
        const { username, password } = this.state;

        LayoutAnimation.configureNext(
            LayoutAnimation.create(700, LayoutAnimation.Types.linear, LayoutAnimation.Properties.scaleXY)
        );

        this.setState({ buttonTitle: '...' });

        return authenticate(username, password)
            .then(() => AsyncStorage.multiSet([
                ['username', username],
                ['password', password],
            ]))
            .then(() => this.props.navigation.navigate(RouteNames.ProductList))
            .catch((error) => {
                this.setState({
                    buttonTitle: 'Oops! Try again.',
                    buttonColor: Colors.Error,
                });
                return new Promise((resolve, reject) => {
                    setTimeout(() => reject(error), 500);
                });
            })
            .catch((error) => {
                this.showErrorModal(error.message || error);
                Vibration.vibrate(500);
                return AsyncStorage.multiRemove(['username', 'password'])
            });
    }

    showErrorModal(message = '') {
        this.setState({
            error: message,
            buttonTitle: message ? this.state.buttonTitle : 'Login',
            buttonColor: message ? this.state.buttonColor : Colors.EpamBlue,
        });
    }

    showNoConnectionDialog() {
        Alert.alert(
            'No connection',
            'App requires connection to work. Please, turn on mobile internet or connect via Wi-Fi.',
            [{ text: 'OK' }]
        );
    }
};
