'use strict';

// react stuff
import React from 'react';
import { Text } from 'react-native';
// styles
import Styles from './ProductList.Styles';

export default class ProductList extends React.Component {
    render() {
        return (
            <Text style={Styles.title}>Products</Text>
        );
    }
};
