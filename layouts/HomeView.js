import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import RequestList from '../components/RequestList';
import NavBar from '../components/NavBar';

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <RequestList></RequestList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }

});
