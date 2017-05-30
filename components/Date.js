import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import moment from 'moment';


export default class Date extends Component {
  state={
    parsedDate: ''
  }

  componentDidMount() {
    const parsedDate = moment(this.props.date).format("DD-MMM-YYYY");
    this.setState({date: parsedDate});
  }

  render(){
    return (
      <Text style={ [ styles.container, this.props.style ]} >  {this.state.date} </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#FFF'
  }
});
