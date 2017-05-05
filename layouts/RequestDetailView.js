import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavBar from '../components/NavBar';
import ItemOffer from '../components/ItemOffer';
import colors from '../components/colors';

export default class SearchView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar backButton={true}/>
        <View style={styles.detailContainer}>
          <Text style={[styles.date]}>{this.props.request.date} </Text>
          <Text style={[styles.detailText, styles.article]}>· {this.props.request.article} </Text>
          <Text style={[styles.detailText, styles.description]}>{this.props.request.description} </Text>
        </View>
        <ItemOffer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputsRow: {
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  detailContainer: {
    backgroundColor: colors.primary,
    padding: 16,
  },
  detailText: {
    color: '#FFF',
    fontSize: 15
  },
  article: {
    marginBottom: 20,
  },
  description: {
    fontWeight: '100',
    lineHeight: 18
  },
  date: {
    fontWeight: '100',
    textAlign: 'right',
    color: colors.accent,
    position: 'absolute',
    right: 15,
    top: 16,
    zIndex: 1
  }

});
