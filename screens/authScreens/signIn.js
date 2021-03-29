import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FormData from 'form-data';
import {connect} from 'react-redux';
import * as actions from '../../redux/authAction';
import {AsyncStorage} from 'react-native';

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
    this.SignIn = this.SignIn.bind(this);
  }

  SignIn() {
    this.props.requestSignIn(this.state.username,this.state.password);
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
    if(this.props.login){
      this.props.navigation.navigate('App');
    }
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
            onPress={this.SignIn}
            style={{...rootStyles.button, ...styles.button}}
          >
            <Text style={rootStyles.buttonText}>ورود</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> console.log(this.props)}
            style={{...rootStyles.button, ...styles.button}}
          >
            <Text style={rootStyles.buttonText}>نمایش پراپرتیس ها</Text>
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

const mapStateToProps = state => ({
  access_token:state.authReducer.access_token,
  login:state.authReducer.login
})

const mapDispatchToProps = dispatch => ({
  requestSignIn:(username,password) => dispatch(actions.SignIn({username,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignInScreen)