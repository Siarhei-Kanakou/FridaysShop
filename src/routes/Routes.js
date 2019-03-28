import { createAppContainer, createStackNavigator } from 'react-navigation';
// constants
import RouteNames from '../constants/RouteNames';
// views
import LoginView from '../components/login/Login.View';
import ProductListView from '../components/product-list/ProductList.View';
import ProductDetailsView from '../components/product-details/ProductDetails.View';

const Navigator = createStackNavigator({
    [RouteNames.Login]: LoginView,
    [RouteNames.ProductList]: ProductListView,
    [RouteNames.ProductDetails]: ProductDetailsView,
}, {
    initialRouteName: RouteNames.Login,
});

export default Navigator;
