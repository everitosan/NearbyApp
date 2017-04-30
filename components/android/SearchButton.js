import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import colors from '../colors';

export default class SearchButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => this.props.handlePress() }>
          <View style={styles.buttonContainer}>
            <Icon name="search" size={35} color="#FFF" />
          </View>
        </TouchableOpacity>
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
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
