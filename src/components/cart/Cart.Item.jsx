import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from './Cart.Styles';

export default class CartItem extends React.Component {
  render() {
    const { name, price } = this.props;

    return (
      <View style={Styles.item}>
        <View style={Styles.itemImage} />
        <View style={Styles.itemInfoContainer}>
          <Text style={Styles.itemTitle} numberOfLines={1}>
            {name}
          </Text>
          <View style={Styles.itemSecondaryContainer}>
            <Text style={Styles.itemPrice}>{`$${price.toFixed(2)}`}</Text>
            {this.renderButton()}
          </View>
        </View>
      </View>
    );
  }

  renderButton = () => {
    return (
      <View style={Styles.itemQtyContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.itemQtyButton}>-</Text>
        </TouchableOpacity>
        <Text style={Styles.itemQtyText}>1</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.itemQtyButton}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
