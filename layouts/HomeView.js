import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
import RequestList from '../components/RequestList';
import NavBar from '../components/NavBar';
import SearchButtonIos from '../components/ios/SearchButton';
import SearchButtonAndroid from '../components/android/SearchButton';
import {Actions} from 'react-native-router-flux';

export default class HomeView extends Component {

  handlePress() {
    Actions.search({});
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <RequestList></RequestList>
        <TouchableOpacity onPress={ () => this.handlePress() }>
          {
            (Platform.OS === 'ios') ? (
              <SearchButtonIos/>
            ) : (
              <SearchButtonAndroid/>
            )
          }
        </TouchableOpacity>
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
