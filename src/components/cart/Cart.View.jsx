import React from 'react';
import {
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';

import Colors from '../../constants/Colors';
import CartItem from './Cart.Item';
import Styles from './Cart.Styles';

export default class CartView extends React.Component {
  static navigationOptions = {
    headerTitle: 'Shopping Cart'
  }

  render() {
    const items = [
      { id: 0, name: 'Item #1 namek klogjk glagifdj igjfs', price: 99.79, quantity: 3 },
      { id: 1, name: 'Item #2', price: 150.79, quantity: 2 },
      { id: 2, name: 'Item #3', price: 31.90, quantity: 1 },
      { id: 3, name: 'Item #4', price: 1.79, quantity: 4 },
    ];
    const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
      <View style={Styles.container}>
        <View style={Styles.itemContainer}>
          <FlatList
            data={items}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <CartItem {...item} />}
          />
        </View>
        <View style={Styles.checkoutContainer}>
          <Text style={Styles.totalText}>Total</Text>
          <Text style={Styles.totalText}>{`$ ${total.toFixed(2)}`}</Text>
        </View>
        <Button color={Colors.EpamBlue} title='Checkout' />
      </View>
    );
  }
}
