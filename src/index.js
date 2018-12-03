import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './components/login/Login.View';
import ProductList from './components/product-list/ProductList.View';
import ProductDetails from './components/product-details/ProductDetails.View';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget venenatis velit. In pretium lorem odio, sed auctor sem porta sed. Curabitur maximus vestibulum augue, ut rutrum nunc porttitor a. Integer porta eros a rutrum rutrum. Duis et libero ante. Maecenas auctor feugiat nibh non commodo. Curabitur eu elit bibendum, vehicula erat et, rutrum enim. Donec pellentesque aliquet diam vel sodales. Nunc sit amet diam sit amet orci consectetur pretium at eget turpis. Pellentesque ullamcorper maximus lorem eget aliquet.";

const items = [
    require('./assets/img/map.png'),
    require('./assets/img/smiling-face.png'),
    require('./assets/img/star.png'),
    require('./assets/img/camera.png'),
    require('./assets/img/gift.png'),
    require('./assets/img/medic-sign.png'),
    require('./assets/img/cart.png'),
    require('./assets/img/rugby.png'),
].map((item, idx) => {
    return { icon: item, name: `Product #${idx + 1}`, description };
});

const Routes = {
    LOGIN: 'Login',
    LIST: 'ProductList',
    DETAILS: 'ProductDetails',
};

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { currentView: Routes.LOGIN };
    }

    routeToList() {
        this.setState(() => {
            return { currentView: Routes.LIST, payload: {}};
        });
    }

    routeToDetails(item) {
        this.setState(() => {
            return { currentView: Routes.DETAILS, payload: { item }};
        })
    };

    render() {
        const loginView = this.state.currentView === Routes.LOGIN &&
            <Login onLoginPress={() => this.routeToList()}/>;

        const listView = this.state.currentView === Routes.LIST &&
            <ProductList items={items} onItemPress={item => this.routeToDetails(item)} />;

        const detailsView = this.state.currentView === Routes.DETAILS &&
            <ProductDetails item={this.state.payload.item} onButtonPress={() => this.routeToList()} />;

        return (
            <View style={{ flex: 1 }}>
                {loginView}
                {listView}
                {detailsView}
            </View>
        );
    }
}
