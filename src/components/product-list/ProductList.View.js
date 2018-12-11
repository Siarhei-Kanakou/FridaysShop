// react stuff
import React from 'react';
import { Text, View } from 'react-native';
// components
import ProductItem from './ProductItem';
// styles
import Styles from './ProductList.Styles';
// constants
import Colors from '../../constants/Colors';
// data
import { getItems } from '../../DataSource';

export default class ProductList extends React.Component {
    static navigationOptions = () => ({
        title: `Welcome!`
    });

    render() {
        const items = getItems();
        const listItems = items.map((item, idx) => {
            return (
                <ProductItem
                    key={idx}
                    icon={item.icon}
                    name={item.name}
                    onPress={() => this.props.navigation.navigate('ProductDetails', { item })}
                />
            );
        });

        return (
            <View style={[Styles.flexContainer, Styles.container]}>
                <Text style={Styles.title}>Products</Text>
                {listItems}
            </View>
        );
    }
};
