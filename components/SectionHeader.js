import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import colors from './colors';
export default class SectionHeader extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.title} </Text>
      </View>
    );
  }
}

SectionHeader.defaultProps = {
  title: "Section"
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    height: 43
  },
  title: {
    color: colors.textColor,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 16
  }
});
