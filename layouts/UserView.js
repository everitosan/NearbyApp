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

export default class UserView extends Component {
  render() {
    const {picture, name, email, telephone, premium} = this.props.data;
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

UserView.defaultProps={
  data: {
    telephone: "58490378",
    email: "aol@aol.com",
    name: "Eve San",
    picture: "https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/17076298_1448529028525613_7344673176019795968_a.jpg",
    premium: true
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
