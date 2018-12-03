/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './components/login/Login.View';
import ProductList from './components/product-list/ProductList.View';
import ProductDetails from './components/product-details/ProductDetails.View';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const items = [
    require('./assets/img/map.png'),
    require('./assets/img/smiling-face.png'),
    require('./assets/img/star.png'),
    require('./assets/img/camera.png'),
    require('./assets/img/gift.png'),
    require('./assets/img/medic-sign.png'),
    require('./assets/img/cart.png'),
    require('./assets/img/rugby.png'),
];

export default class App extends Component<Props> {
  render() {
    return (
      <ProductList items={items} />
      //<ProductDetails />
      /*
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello, world!</Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: 'bearerFond',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: 'bearerFond',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
