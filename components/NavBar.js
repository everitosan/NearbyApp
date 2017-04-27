import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);
  }
  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.iosSpacer} ></View>
        <View style={styles.container}>
          { this.props.backButton ? (
            <Icon name="angle-left" size={30} color="#FFF" />
          ):(
            <Icon name="angle-left" size={30} color="#262728" />
          )}

          <Image style={styles.logo} source={require('./img/Logo@3x.png')} />
          <Icon name="cog" size={25} color="#FFF" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column'
  },
  iosSpacer: {
    height: (Platform.OS ==='ios')? 18 : 0,
    backgroundColor: '#DE2B76'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262728',
    height: 60,
    paddingRight: 16,
    paddingLeft: 16
  },
  logo: {
    // width: 50,
    // height: 38,
  }

});
