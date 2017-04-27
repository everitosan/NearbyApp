import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ItemRequest extends Component {
  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.date}> {this.props.request.date} </Text>
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
    color: '#DE2B76',
    textAlign: 'right'
  },
  article: {
    fontWeight: 'bold'
  },
  description: {
    overflow: 'hidden',
    height: 20
  }
});
