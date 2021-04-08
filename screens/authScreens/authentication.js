import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
} from 'react-native';
import rootStyles from '../../styles/rootStyle';
import {AsyncStorage} from 'react-native'; 
class AuthScreen extends React.Component {
  async componentWillMount() {
    try{  
      let is_login = await AsyncStorage.getItem('access_token'); 
      if(is_login){
        console.log("will mount");
        this.props.navigation.navigate('App');
      } 
    }  
    catch(error){  
      alert(error)  
    }  
  }

  render() {
    console.log("render");
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