import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActionSheetIOS
} from 'react-native';
import colors from './colors';
export default class ItemOffer extends Component {
  showImage() {
    console.warn("Should go to view the image");
  }

  selectOffer() {
    ActionSheetIOS.showActionSheetWithOptions({
      title: "Elige a "+ this.props.offer.name + " como vendedor o házle saber tú interés",
      options: ["Generar interés", "Elegir como vendedor", "Cancel"],
      cancelButtonIndex: 2
    }, (buttonIndex) => {
      this.setState({option: buttonIndex});
    });
  }

  render() {
    const {name, picture, distance, offer, articlePicture} = this.props.offer;
    const offerSplit = offer.split(".");
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.selectOffer()}>

        <View style={styles.pictureContainer}>
          {
            (articlePicture == "")?(
              <Image style={styles.picture} source={{uri: picture }}/>
            ): (
              <TouchableOpacity onPress={()=> this.showImage()}>
                <Image style={styles.picture} source={{uri: articlePicture }}/>
              </TouchableOpacity>
            )
          }
        </View>
        <Text style={styles.offerText} >{name} a {distance} te ha hecho una oferta de </Text>
        <View style={styles.offer}>
          <Text style={styles.integer}>${ offerSplit[0] }.</Text>
          <Text style={styles.float}>{ offerSplit[1] } </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ItemOffer.defaultProps = {
  offer: {
    name: "Yanek",
    picture: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/16997980_10211993067244493_6672204882497442977_n.jpg?oh=94951db44eb9b73d561591bcd32e947e&oe=59B8B2DB",
    distance: "2km",
    offer: "200.00",
    articlePicture: "https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/13442668_10209532187244031_313275553456575574_o.jpg?oh=d0a496ddbd0a06309809a31210422e87&oe=59BE3264"
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
