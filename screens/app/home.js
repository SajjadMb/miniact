import React from 'react';
import {
  View , 
  StyleSheet, 
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {AsyncStorage} from 'react-native';  

const posts = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Matt Johnson',
    book: 'GraphQL Basics'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Will Smith',
    book: 'React Basics'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Katie Hanson',
    book: 'React Native for Mobile Apps'
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: posts
    }
  }

  item = {};
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
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