'use strict';

// react stuff
import React from 'react';
import { View } from 'react-native';
// components
import ProductItem from './ProductItem';
import Header from './ProductList.Header';
// styles
import Styles from './ProductList.Styles';
// data
import { getItems } from '../../DataSource';

export default class ProductList extends React.Component {
    static navigationOptions = {
        header: <Header />
    }

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
                {listItems}
            </View>
        );
    }
};
