import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import colors from './colors';
import {Actions} from 'react-native-router-flux';

export default class ContactDataRow extends Component {

  render() {
    const {title, data, premium} = this.props;
    return (
      <View style={styles.container} >
        <View style={styles.row}>
          <View>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.data}> {data} </Text>
          </View>
          {
            premium &&  
            <Image source={ require("./img/editIcon.png") }/>
          }
        </View>
        <View  style={styles.divider}></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: 'transparent',
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 12,
    justifyContent: 'center',
  },
  title: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '100',
    marginBottom: 6,
  },
  data: {
    marginBottom: 6,
  },
  divider: {
    flex:1,
    backgroundColor: colors.lineColor,
    height: StyleSheet.hairlineWidth
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }


});
