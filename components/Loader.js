import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} > {this.props.text} </Text>
        <ActivityIndicator size='large' animating = {true} color='white' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.75)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10
  }
});
