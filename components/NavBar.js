import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from './colors';
import {Actions} from 'react-native-router-flux';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);
  }

  goBack () {
    Actions.pop({});
  }

  goSettings() {
    Actions.settings({});
  }

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.iosSpacer} ></View>
        <View style={styles.container}>
          { this.props.backButton ? (
            <TouchableOpacity onPress={ ()=> this.goBack() } >
              <Icon name="angle-left" size={30} color={colors.iconColor} />
            </TouchableOpacity>
          ):(
            <Icon name="angle-left" size={30} color={colors.primaryDark} />
          )}

          <Image style={styles.logo} source={require('./img/logo2.png')} />
          { this.props.settingsButton ? (
            <TouchableOpacity onPress={ ()=> this.goSettings() } >
            <Icon name="cog" size={25} color={colors.iconColor} />
            </TouchableOpacity>
          ):(
            <Icon name="cog" size={25} color={colors.primaryDark}  />
          )}
        </View>
      </View>
    );
  }
}

NavBar.defaultProps = {
  settingsButton : true
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column'
  },
  iosSpacer: {
    height: (Platform.OS ==='ios')? 18 : 0,
    backgroundColor: 'rgba(38,39,40,.66)'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    height: 60,
    paddingRight: 16,
    paddingLeft: 16
  },
  logo: {
    // width: 50,
    // height: 38,
  }

});
