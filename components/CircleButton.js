import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import colors from './colors';

export default class CircleButton extends Component {
    render() {
      let custom = Object.keys(this.props.style).length!==0 ? this.props.style: {};
      return (
        <View style={[styles.container, custom]} >
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
      );
    }
}

CircleButton.defaultProps = {
  text: "B",
  radius: 54,
  color: colors.accent
}

let pre_styles = {
  container: {
    width: CircleButton.defaultProps.radius,
    height: CircleButton.defaultProps.radius,
    borderRadius: (CircleButton.defaultProps.radius)/2,
    backgroundColor: CircleButton.defaultProps.color,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 0.4,
    elevation: 2,
  },
  text: {
    color: 'white',
  }
};

const styles = StyleSheet.create(pre_styles);
