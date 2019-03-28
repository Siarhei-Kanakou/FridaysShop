import React from 'react';
import { Image, View } from 'react-native';
// styles
import Styles from './Login.Styles';

export default class Header extends React.Component {
    render() {
        return (
            <View style={Styles.headerContainer}>
                <Image source={require('../../assets/img/smiling-face.png')} />
            </View>
        );
    }
}
