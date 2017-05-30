import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavBar from '../components/NavBar';
import ItemOffer from '../components/ItemOffer';
import ItemOfferList from '../components/ItemOfferList';
import Date from '../components/Date';
import colors from '../components/colors';
import {getItemOffers} from '../components/api/client';

export default class RequestDetailView extends Component {
  state = {
    offers: []
  }

  componentDidMount() {
    getItemOffers(this.props.request._id)
      .then(response => {
        this.setState({'offers': response});
      })
      .catch(err => {
        Alert.alert("Err", err.message());
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar backButton={true}/>
        <View style={styles.detailContainer}>
          <Date style={styles.date} date={this.props.request.date} />
          <Text style={[styles.detailText, styles.article]}>· {this.props.request.article} </Text>
          <Text style={[styles.detailText, styles.description]}>{this.props.request.description} </Text>
        </View>
        <ItemOfferList offers={this.state.offers } />
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
