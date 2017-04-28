import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import HomeView from './layouts/HomeView';
import SearchView from './layouts/SearchView';
import {Scene, Router} from 'react-native-router-flux';

export default class nearbyApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} hideNavBar={true}/>
          <Scene key="search" component={SearchView} hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('nearbyApp', () => nearbyApp);
