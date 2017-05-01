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
  AccessToken
} from 'react-native-fbsdk';

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    StatusBar.setBarStyle('light-content', true);
  }

  goToHomeView() {
    Actions.root({});
  }

  render() {
    return (
      <Image style={styles.container} source={require("../components/img/login.jpg")}>
        <Image style={styles.logo} source={require("../components/img/LogoHome.png")} />
        <Text style={styles.slogan}> Compraventas en segundos </Text>
        <View style={styles.loginContainer}>

          <LoginButton
            readPermissions={["public_profile"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString());
                      this.goToHomeView();
                    }
                  )
                }
              }
            }
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
