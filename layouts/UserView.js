import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import NavBar from '../components/NavBar';
import colors from '../components/colors';
import ContactDataRow from '../components/ContactDataRow';
import {getManager} from '../components/realmManager';

export default class UserView extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    let realm = getManager();
    this.setState({'data': realm.objects('User')[0] });
  }

  render() {
    const {picture, name, email, telephone, premium} = this.state.data;
    return (
      <View style={styles.container}>
        <NavBar backButton={true}/>
        <ScrollView>
          <Image style={styles.pictureContainer} source={require('../components/img/degradado.png')}>
            <Image style={{ justifyContent: 'center', alignItems: 'center' }} source={require('../components/img/Ring.png')}>
              <Image style={styles.picture} source={{uri: picture }}/>
            </Image>
            <Text style={styles.name}> {name} </Text>
          </Image>

          <ContactDataRow title="Email" data={email} premium={premium} />
          <ContactDataRow title="Telephone" data={telephone} premium={premium} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  pictureContainer: {
    height: 192,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 24,
    fontWeight: '200',
    marginTop: 15,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: (100/2)
  }

});
