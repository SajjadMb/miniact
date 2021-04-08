import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {AsyncStorage} from 'react-native';  
import rootStyles from '../../styles/rootStyle';
import DashboardApi from '../../api/dashboard.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  static navigationOptions = {
    title: 'MiniAct',
    headerTitleStyle: { alignItems: 'center' },
    headerStyle: {
      backgroundColor: '#52b69a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method. 
      const access_token = await AsyncStorage.getItem('access_token');

      const result = await DashboardApi.fetchDashboard(access_token);
      console.log(result);
      this.setState({
        data: result
      })
    } catch(err) {
      console.log("Error fetching data", err);
    }
  }

  renderItem({item}) {
    return(
      <View style={rootStyles.card}>
        <Text>{item.text}</Text>
      </View>
    )
  }

  item = {};
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem({item})}
          keyExtractor={item => item.actionId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default Home;