import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import colors from './colors';
export default class ItemOffer extends Component {
  render() {
    const {name, picture, distance, offer} = this.props.offer;
    const offerSplit = offer.split(".");
    return (
      <View style={styles.container}>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={{uri: picture }}/>
        </View>
        <Text style={styles.offerText} >{name} a {distance} te ha hecho una oferta de </Text>
        <View style={styles.offer}>
          <Text style={styles.integer}>${ offerSplit[0] }.</Text>
          <Text style={styles.float}>{ offerSplit[1] } </Text>
        </View>
      </View>
    );
  }
}

ItemOffer.defaultProps = {
  offer: {
    name: "Yanek",
    picture: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/16997980_10211993067244493_6672204882497442977_n.jpg?oh=94951db44eb9b73d561591bcd32e947e&oe=59B8B2DB",
    distance: "2km",
    offer: "200.00"
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    padding: 16,
  },
  offerText: {
    flex: 2.5,
    color: colors.textColor
  },
  offer: {
    justifyContent: 'flex-end',
    flex: 2,
    flexDirection: 'row',
  },
  pictureContainer: {
    flex: 1,
  },
  picture: {
    borderRadius: (48/2),
    height: 48,
    width: 48,
  },
  integer : {
    color: colors.primary,
    fontSize: 34,
    fontWeight: '300'
  },
  float: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '300'
  }
});
