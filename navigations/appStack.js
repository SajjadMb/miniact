import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/app/home';

const AppStack = createStackNavigator({
    Home : Home,
}, {headerLayoutPreset: 'center'});

export default AppStack;