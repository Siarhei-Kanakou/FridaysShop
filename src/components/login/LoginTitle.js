'use strict';

import React from 'react';
import { Image, View } from 'react-native';
// styles
import Styles from './Login.Styles';

export default class LoginTitle extends React.Component {
    render() {
        return (
            <View style={Styles.loginTitleContainer}>
                <Image source={require('../../assets/img/smiling-face.png')} />
            </View>
        );
    }
}
