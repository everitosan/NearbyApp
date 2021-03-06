import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import LoginView from './layouts/LoginView';
import HomeView from './layouts/HomeView';
import UserView from './layouts/UserView';
import SearchView from './layouts/SearchView';
import SettingsView from './layouts/SettingsView';
import RequestDetailView from './layouts/RequestDetailView';
import {Scene, Router} from 'react-native-router-flux';

export default class nearbyApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="login" component={LoginView} hideNavBar={true}/>
        <Scene key="root">
          <Scene key="home" component={HomeView} hideNavBar={true}/>
          <Scene key="user" component={UserView} hideNavBar={true}/>
          <Scene key="search" component={SearchView} hideNavBar={true}/>
          <Scene key="settings" component={SettingsView} hideNavBar={true}/>
          <Scene key="requestDetail" component={RequestDetailView} hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('nearbyApp', () => nearbyApp);
