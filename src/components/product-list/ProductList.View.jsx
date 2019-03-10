'use strict';

// react stuff
import React from 'react';
import { Button, FlatList, View } from 'react-native';
// components
import ProductItem from './ProductItem';
import Header from './ProductList.Header';
// styles
import Styles from './ProductList.Styles';
// constants
import RouteNames from '../../constants/RouteNames';
// data
import { fetchItems, fetchItemsMock } from '../../api/DataSource';

const PAGE_SIZE = 15;

export default class ProductList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header onCartClick={() => navigation.navigate(RouteNames.Cart)} />,
    })

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            isScrolling: false,
            items: [],
            totalCount: 0,
            pageIdx: 0,
        };
    }

    componentDidMount() {
       this.loadProducts(this.state.pageIdx).catch(e => console.error(e));
    }

    render() {
        const { isRefreshing, items } = this.state;

        return (
            <View style={[Styles.flexContainer, Styles.container]}>
                <FlatList
                    data={items}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => this.renderItem(item)}

                    onMomentumScrollBegin={() => this.onScroll(true)}
                    onMomentumScrollEnd={() => this.onScroll(false)}
                    onEndReachedThreshold={0.01}
                    onEndReached={() => this.onEndReached()}
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

    onEndReached() {
        const { isScrolling, pageIdx, totalCount } = this.state;
        const maxCount = (pageIdx - 1) * PAGE_SIZE;

        if (isScrolling || maxCount >= totalCount) {
            return;
        }

        this.loadProducts(pageIdx + 1).catch(e => console.error(e));
    }

    onScroll(isScrolling) {
        this.setState({ isScrolling });
    }

    loadProducts(pageIdx) {
        console.log('loadProducts: ', pageIdx);
        return fetchItemsMock({ pageSize: PAGE_SIZE, pageIdx })
            .then(({ items, totalCount }) => {
                this.setState({
                    items: this.state.items.concat(items),
                    pageIdx,
                    totalCount,
                });
            });
    }

    reloadProducts() {
        this.setState({
            isRefreshing: true,
            items: [],
        });

        this.loadProducts(0)
            .then(() => this.setState({ isRefreshing: false }))
            .catch((e) => {
                this.setState({
                    isRefreshing: false,
                    items: [],
                })
            });
    }

    
};
