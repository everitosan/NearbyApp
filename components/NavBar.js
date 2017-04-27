import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);
  }
  render() {
    return (
      <View style={styles.container}>

        { this.props.backButton ? (
          <Icon name="angle-left" size={30} color="#FFF" />
        ):(
          <Icon name="angle-left" size={30} color="#262728" />
        )}

        <Image source={require('./img/Logo@2x.png')} />
        <Icon name="cog" size={30} color="#FFF" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262728',
    height: 70,
    paddingTop: 15,
    paddingRight: 16,
    paddingLeft: 16
  }

});
