import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import NavBar from '../components/NavBar';
import colors from './colors';
import {Actions} from 'react-native-router-flux';

export default class SendButton extends Component {

  render() {
    return (
      <View style={styles.sendButtonContainer} >
        <TouchableOpacity onPress={ () => this.props.handlePress() }>
          <View style={styles.sendButton} >
            <Text style={styles.sendButtonText}>
              Enviar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

SendButton.defaultProps = {
    handlePress: ()=> { console.warn("send request"); Actions.pop(); }
}

const styles = StyleSheet.create({
  sendButtonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 32
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 50,
    width: 143,
    height: 42,
    justifyContent: 'center',
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 2,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20
  }

});
