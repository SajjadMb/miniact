import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
} from 'react-native';
import rootStyles from '../../styles/rootStyle'
class AuthScreen extends React.Component {

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.cover}></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SingUp')}
            style={rootStyles.button}
          >
            <Text style={rootStyles.buttonText}>ورود</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SingUp')}
            style={rootStyles.button}
          >
            <Text style={rootStyles.buttonText}>ثبت نام</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent:'space-around',
    flexDirection : 'column',
  },
  cover: {
    flex: 8
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default AuthScreen;