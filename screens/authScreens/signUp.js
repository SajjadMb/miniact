import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import rootStyles from '../../styles/rootStyle';
class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  requestSignUp() {
    console.log('request');
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
            placeholder='ایمیل'
            onChangeText={this.onChangePassword}
          />
          <TextInput 
            style={[rootStyles.textInput, styles.textInput]}
            placeholder='رمز عبور'
            onChangeText={this.onChangePassword}
          />
          <TextInput 
            style={[rootStyles.textInput, styles.textInput]}
            placeholder='تکرار رمز عبور'
            onChangeText={this.onChangePassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.requestSignUp}
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

export default SignUpScreen;