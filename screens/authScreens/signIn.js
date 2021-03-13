import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FormData from 'form-data';

import rootStyles from '../../styles/rootStyle';
class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.requestSignIn = this.requestSignIn.bind(this);
  }

  requestSignIn() {
    var form = new FormData();
    form.append('username', this.state.username);
    form.append('password', this.state.password);

    fetch('https://apagh.venice.ir/mobile/services/action/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: form
    }).then((response) => {
      console.log(response);
      response.json().then(data => {
        if(data['login']['valid']){
          //store token in state and navigate to home.js
          this.props.navigation.navigate('App');
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });

  } 

  onChangeUsername(username) {
    this.setState({
      username: username
    })
  }

  onChangePassword(password) {
    this.setState({
      password: password
    })
  }

  render() {
    return (
       <View style={styles.Container}>
        <View style={styles.cover}>
          <TextInput 
            style={[rootStyles.textInput, styles.textInput]}
            placeholder='نام کاربری'
            onChangeText={this.onChangeUsername}
          />
          <TextInput 
            style={[rootStyles.textInput, styles.textInput]}
            placeholder='رمز عبور'
            onChangeText={this.onChangePassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.requestSignIn}
            style={{...rootStyles.button, ...styles.button}}
          >
            <Text style={rootStyles.buttonText}>ورود</Text>
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
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 18
  },
  textInput:{
    marginHorizontal:18,
    marginVertical:5
  },
  button: {
    marginTop: 15
  }
});
export default SignInScreen;