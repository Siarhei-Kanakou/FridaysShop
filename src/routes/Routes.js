'use strict';

import { createAppContainer, createStackNavigator } from 'react-navigation';
// views
import LoginView from '../components/login/Login.View';
import ProductListView from '../components/product-list/ProductList.View';
import ProductDetailsView from '../components/product-details/ProductDetails.View';

const Navigator = createStackNavigator({
    Login: LoginView,
    ProductList: ProductListView,
    ProductDetails: ProductDetailsView,
}, {
    initialRouteName: 'Login',
});

export default Navigator;
