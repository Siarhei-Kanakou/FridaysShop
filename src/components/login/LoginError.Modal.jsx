'use strict';

// react stuff
import React from 'react';
import {
    Animated,
    Button,
    Text,
    View
} from 'react-native';
// styles
import Styles from './Login.Styles';
// constants
import Colors from '../../constants/Colors';

export default class LoginError extends React.Component {
    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(0.3);
    }

    componentDidMount() {
        this.springValue.setValue(0.3);

        Animated.spring(this.springValue, {
            toValue: 1,
            friction: 1,
        }).start();
    }

    render() {
        const { message, onClosePress } = this.props;
        const containerAnimationStyles = {
            transform: [
                { scale: this.springValue }
            ]
        };

        return (
            <View style={Styles.modalContainer}>
                <Animated.View style={[Styles.modalInnerContainer, containerAnimationStyles ]}>
                    <Text style={Styles.modalMessage}>
                        {message}
                    </Text>
                    <Button
                        color={Colors.Coral}
                        title="Close"
                        onPress={() => onClosePress()}
                    />
                </Animated.View>
            </View>
        );
    }
}
