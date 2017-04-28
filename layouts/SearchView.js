import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import NavBar from '../components/NavBar';

export default class SearchView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar backButton={true}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

});
