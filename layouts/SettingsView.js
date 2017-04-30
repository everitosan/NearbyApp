import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform
} from 'react-native';
import RequestList from '../components/RequestList';
import NavBar from '../components/NavBar';
import SearchButtonIos from '../components/ios/SearchButton';
import SearchButtonAndroid from '../components/android/SearchButton';
import {Actions} from 'react-native-router-flux';

export default class SettingsView extends Component {

  goToSearchView() {
    Actions.search({});
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar settingsButton={false} backButton={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF'
  }

});
