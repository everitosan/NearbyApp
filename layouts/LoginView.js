import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image
} from 'react-native';
import RequestList from '../components/RequestList';
import NavBar from '../components/NavBar';
import SearchButtonIos from '../components/ios/SearchButton';
import SearchButtonAndroid from '../components/android/SearchButton';
import {Actions} from 'react-native-router-flux';
import FBSDK, {
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {loginUser} from '../components/api/client';

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);

    this.infoRequest = new GraphRequest(
      '/me?fields=id,name,email,picture.width(100).height(100),verified',
      null,
      this._responseInfoCallback,
    );
  }

  _responseInfoCallback = (error: ?Object, result: ?Object) => {
    if(error) return false;
    loginUser(result)
      .then( userInfo => {
        Actions.root({ userInfo :userInfo});
      })
      .catch(err => { console.warn(err) });
  }

  authenticateUser() {
    new GraphRequestManager().addRequest(this.infoRequest).start();
  }

  handleLogin = (error, result) => {
    if (error) {
      alert("login has error: " + result.error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this.authenticateUser();
    }
  };

  componentWillMount() {
    this.authenticateUser();
  }

  render() {
    return (
      <Image style={styles.container} source={require("../components/img/login.jpg")}>
        <Image style={styles.logo} source={require("../components/img/LogoHome.png")} />
        <Text style={styles.slogan}> Compraventas en segundos </Text>
        <View style={styles.loginContainer}>

          <LoginButton
            readPermissions={["public_profile", "email"]}
            onLoginFinished={ this.handleLogin }
            onLogoutFinished={() => alert("logout.")}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: undefined,
    height: undefined
  },
  logo: {
    marginTop: 40,
    width: 176,
    height: 143
  },
  slogan: {
    color: '#FFF',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 16
  },
  loginContainer: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 20
  }

});
