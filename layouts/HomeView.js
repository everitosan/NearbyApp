import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
  Alert
} from 'react-native';
import RequestList from '../components/RequestList';
import NavBar from '../components/NavBar';
import SearchButtonIos from '../components/ios/SearchButton';
import SearchButtonAndroid from '../components/android/SearchButton';
import {Actions} from 'react-native-router-flux';
import {getMyRequests, getMyInfo} from '../components/api/client';
import Realm from 'realm';

export default class HomeView extends Component {

  state= {
    my_requests : []
  }

  goToSearchView() {
    Actions.search({_id: this.props.userInfo._id, _return: this.getDataSource});
  }

  componentDidMount() {
    const UserSchema = {
      name: 'User',
      properties: {
        id: 'string',
        name: 'string',
        email: 'string',
        picture: 'string',
        telephone: {type: 'string', optional: true}
      }
    };

    let realm = new Realm({
      schema: [UserSchema]
    });

    getMyInfo(this.props.userInfo._id)
      .then(info => {
        realm.write(() => {
          let user = realm.create('User', {id: info._id, name: info.name, email: info.email, picture: info.picture});
        });
        this.setState({'my_requests': info.requests});
      })
      .catch(err => {
        Alert.alert("Error", JSON.stringify(err));
      });
  }

  getDataSource = () => {
    getMyRequests(this.props.userInfo._id)
      .then( requests => {
        this.setState({'my_requests': requests});
      })
      .catch(err => {
        Alert.alert("Error", JSON.stringify(err));
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar userButton={true}/>
        <RequestList requests={this.state.my_requests} ></RequestList>
        {
          (Platform.OS === 'ios') ? (
            <SearchButtonIos handlePress={ () => this.goToSearchView() }/>
          ) : (
            <SearchButtonAndroid handlePress={ () => this.goToSearchView() }/>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

});
