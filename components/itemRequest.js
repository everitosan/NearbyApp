import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import colors from './colors';
import moment from 'moment';
export default class ItemRequest extends Component {

  state= {
    date: '00'
  }

  componentDidMount() {
    const parsedDate = moment(this.props.request.date).format("DD-MMM-YYYY");
    this.setState({date: parsedDate});
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.date}> {this.state.date } </Text>
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
