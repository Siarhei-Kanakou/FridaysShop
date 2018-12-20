'use strict';

// react stuff
import React from 'react';
import { FlatList, View } from 'react-native';
// components
import ProductItem from './ProductItem';
import Header from './ProductList.Header';
// styles
import Styles from './ProductList.Styles';
// constants
import RouteNames from '../../constants/RouteNames';
// data
import { fetchItems } from '../../api/DataSource';

const PAGE_SIZE = 100;

export default class ProductList extends React.Component {
    static navigationOptions = {
        header: <Header />
    }

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            items: [],
        };
    }

    componentDidMount() {
       this.loadProducts().catch(e => console.error(e));
    }

    render() {
        const { isRefreshing, items } = this.state;

        return (
            <View style={[Styles.flexContainer, Styles.container]}>
                <FlatList
                    data={items}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => this.renderItem(item)}
                    onRefresh={() => this.reloadProducts()}
                    refreshing={isRefreshing}
                />
            </View>
        );
    }

    renderItem(item) {
        return (
            <ProductItem
                icon={item.icon}
                name={item.name}
                onPress={() => this.props.navigation.navigate(RouteNames.ProductDetails, { item })}
            />
        );
    }

    loadProducts(pageIdx) {
        return fetchItems({ pageSize: PAGE_SIZE })
            .then((items) => {
                this.setState({
                    items: this.state.items.concat(items),
                });
            });
    }

    reloadProducts() {
        this.setState({
            isRefreshing: true,
            items: [],
        });

        this.loadProducts()
            .then(() => this.setState({ isRefreshing: false }))
            .catch((e) => {
                this.setState({
                    isRefreshing: false,
                    items: [],
                })
            });
    }
};
