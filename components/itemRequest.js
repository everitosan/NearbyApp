import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import colors from './colors';
import Date from './Date';
export default class ItemRequest extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Date date={this.props.request.date} style={styles.date} />
        <Text style={styles.article}> · {this.props.request.article} </Text>

        <Text style={styles.description}> {this.props.request.description} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 66
  },
  date: {
    color: colors.primaryDark,
    textAlign: 'right',
    fontWeight: '100'
  },
  article: {
    fontWeight: 'normal',
    color : colors.textColor
  },
  description: {
    overflow: 'hidden',
    height: 20,
    fontWeight: '100'
  }
});
