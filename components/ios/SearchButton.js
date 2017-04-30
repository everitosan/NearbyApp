import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

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

SearchButton.defaultProps  = {
  handlePress : () => {console.warn("Should pass a function")}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.2)',
    height: 60,
    position: 'absolute',
    bottom: 4,
    left: 0,
    width: '100%'
  },
  buttonContainer: {
    width: 54,
    height: 54,
    borderRadius: 26,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 2,
    backgroundColor: '#DE2B76',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
