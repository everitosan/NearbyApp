import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class SearchButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Icon name="search" size={35} color="#FFF" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#E8E9EA',
    height: 60,
    bottom: 16,
    right: 16,
    width: 54,
    height: 54,
    borderRadius: 26,
    elevation: 4
  },
  buttonContainer: {
    width: 54,
    height: 54,
    borderRadius: 26,
    shadowOpacity: 0.4,
    backgroundColor: '#DE2B76',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
