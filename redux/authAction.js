import FormData from 'form-data';
import {AsyncStorage} from 'react-native';

export function loginSuccess(access_token){
  return{
    type:'SAVE_ACCESS_TOKEN',
    access_token
  }
}

export function SignIn(data){
  var form = new FormData();
  form.append('username', data.username);
  form.append('password', data.password);
  return dispatch => {
    return fetch('https://apagh.venice.ir/mobile/services/action/login/',{
      method:'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: form
    })
    .then((response) => {
      response.json().then(data => {
        if(data['login']['valid']){
          //store token in state and navigate to home.js
          console.log(data);
          access_token = data['login']['cookies']['ow_login'];
          AsyncStorage.setItem('access_token',access_token);
          dispatch(loginSuccess(access_token))
        }
      });
    })
    .catch((error) => {
      console.log("error",error);
    })
  }
}