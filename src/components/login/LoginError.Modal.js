'use strict';

// react stuff
import React from 'react';
import { Button, Modal, Text, View } from 'react-native';
// styles
import Styles from './Login.Styles';
// constants
import Colors from '../../constants/Colors';

export default class LoginError extends React.Component {
    render() {
        const { isVisible, message, onClosePress } = this.props;

        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {}}
            >
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalInnerContainer}>
                        <Text style={Styles.modalMessage}>
                            {message}
                        </Text>
                        <Button
                            color={Colors.Coral}
                            title="Close"
                            onPress={() => onClosePress()}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}
