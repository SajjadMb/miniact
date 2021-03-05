import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppStack from './appStack';
import AuthStack from './authStack';

const screens = {
    App : AppStack,
    Auth : AuthStack,
};

const switchNavigator = createSwitchNavigator(screens,{
    initialRouteName : 'Auth',
});

export default createAppContainer(switchNavigator);
