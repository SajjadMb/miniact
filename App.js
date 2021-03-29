import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigator from './navigations/rootNav';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Reducers from './redux/reducers'

let store = createStore(Reducers,applyMiddleware(thunkMiddleware));
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
