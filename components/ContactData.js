import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  Platform
} from 'react-native';

import colors from '../components/colors';

export default class ContactData extends Component {

  render() {
    const {telephone, email, picture} = this.props.data;

    return (
      <View style={styles.settingRow} >
        <View style={ styles.dataContainer }>
          <Text style={styles.dataText}> Teléfono: { telephone } </Text>
          <Text style={styles.dataText}> Email: { email } </Text>
        </View>
        <View style={styles.photoContainer}>
          <Image style={styles.picture} source={{uri : picture}} />
        </View>
      </View>
    );
  }
}

ContactData.defaultProps={
  data: {
    telephone: "55555555",
    email: "aol@aol.com",
    picture: "https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/17076298_1448529028525613_7344673176019795968_a.jpg"
  }
}


const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center'
  },
  dataContainer: {
    flex: 3,
  },
  dataText: {
    fontWeight: '100',
    fontSize: 16,
  },
  photoContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picture: {
    borderWidth: 1,
    borderRadius: 24,
    borderColor: colors.accent,
    width: 48,
    height: 48
  }

});
