'use strict';

// react stuff
import React from 'react';
import {
    Animated,
    PanResponder,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
// styles
import Styles from './Login.Styles';
// constants
import Colors from '../../constants/Colors';

export default class LoginError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: new Animated.Value(0),
            modal: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.animate();
    }

    render() {
        const { message, onClosePress } = this.props;

        return (
            <View style={Styles.modalContainer}>
                <Animated.View style={[Styles.modalInnerContainer, this.getModalAnimationStyles()]}>
                    <Text style={Styles.modalMessage}>
                        {message}
                    </Text>
                    <Animated.View style={[Styles.modalButtonContainer, this.getButtonAnimationStyles()]}>
                        <TouchableOpacity style={Styles.modalButton} onPress={() => onClosePress()}>
                            <Text style={Styles.modalButtonText}>{'Close'}</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </View>
        );
    }

    animate() {
        Animated.sequence([
            this.animateModal(),
            this.animateButton(),
        ]).start();
    }

    animateButton() {
        const { button: animationValue } = this.state;
        animationValue.setValue(0);

        return Animated.timing(animationValue, {
            toValue: 1,
            duration: 300,
        });
    }

    animateModal() {
        const { modal: animationValue } = this.state;


        animationValue.setValue(0);

        return Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
        });
    }

    getModalAnimationStyles() {
        const { modal: animationValue } = this.state;
        const rotationValue = animationValue.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: ['0deg', '180deg', '360deg', '540deg', '720deg'],
        });

        return {
            transform: [
                { scale: animationValue },
                { rotate: rotationValue }
            ],
        };
    }

    getButtonAnimationStyles() {
        const { button: animationValue } = this.state;

        return {
            opacity: animationValue,
        };
    }
}
