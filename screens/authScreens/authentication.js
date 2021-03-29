import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
} from 'react-native';
import rootStyles from '../../styles/rootStyle';
class AuthScreen extends React.Component {
  render() {
    displayData = async ()=>{  
    try{  
      let is_login = await AsyncStorage.getItem('login');  
      if(is_login){
        this.props.navigation.navigate('App');
      } 
    }  
    catch(error){  
      alert(error)  
    }  
  }  
    return (
      <View style={styles.Container}>
        <View style={styles.cover}></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}
             style={{...rootStyles.button, ...styles.button}}
          >
            <Text style={rootStyles.buttonText}>ورود</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SingUp')}
             style={{...rootStyles.button, ...styles.button}}
          >
            <Text style={rootStyles.buttonText}>ثبت نام</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection : 'column',
  },
  cover: {
    flex: 4,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 18
  },
  button: {
    marginTop: 15
  }
});

export default AuthScreen;