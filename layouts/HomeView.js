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

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <RequestList></RequestList>
        {
          (Platform.OS === 'ios') ? (
            <SearchButtonIos/>
          ) : (
            <SearchButtonAndroid/>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }

});
