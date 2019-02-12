import React from 'react';
import { createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './routes/Routes';

const AppContainer = createAppContainer(Navigator);

export default class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return <AppContainer />;
    }
}
