import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native';
import {AsyncStorage} from 'react-native';  

class Home extends React.Component {
  access_token = AsyncStorage.getItem('access_token');

  displayData = async ()=>{  
    try{  
      let access_token = await AsyncStorage.getItem('access_token');  
      alert(access_token);  
    }  
    catch(error){  
      alert(error)  
    }  
  }  

  render() {
    return (
      <View>
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>   
      </View>
    );
  }
}

export default Home;