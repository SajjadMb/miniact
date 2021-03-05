import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignInScreen from '../screens/authScreens/signIn';
import SignUpScreen from '../screens/authScreens/signUp';
import AuthScreen from '../screens/authScreens/authentication';

const AuthStack = createStackNavigator({
    Auth : AuthScreen,
    SignIn : SignInScreen,
    SingUp : SignUpScreen,
},{
    headerMode: 'none',
});

export default AuthStack;