import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import NavBar from '../components/NavBar';
import SendButton from '../components/SendButton';

export default class SearchView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar backButton={true}/>
        <Text style={styles.instructions} >Describe el producto que estas buscando, de esta forma podrán ayudarte las personas a tu alrededor. Recuerda que no está permitido compartir información de contacto como correos o teléfonos. </Text>
        <View style={styles.InputsContainer} >

          <View style={styles.InputsRow}>
            <Text style={styles.InputLabel}> Artículo </Text>
            <TextInput
            style={styles.articleInput}
            maxLength={100}
            />
          </View>

          <View style={styles.InputsRow}>
            <Text style={styles.InputLabel}> Descripción (140 caracteres) </Text>
            <TextInput
            style={styles.descriptionInput}
            multiline={true}
            maxLength={140}
            />
          </View>


        </View>
        <SendButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputsRow: {
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  instructions: {
    backgroundColor: '#DE2B76',
    padding: 16,
    color: '#FFF',
    fontSize: 16,
    textAlign: 'justify'
  },
  InputLabel: {
    fontSize: 16,
    marginBottom: 6,
    color: '#4F5659'
  },
  articleInput:  {
    borderColor: '#E8E9EA',
    borderWidth: 1,
    height: 30,
    fontSize: 14,
    padding: 4
  },
  descriptionInput: {
    borderColor: '#E8E9EA',
    fontSize: 14,
    borderWidth: 1,
    height: 120,
    padding: 4
  },
  InputsContainer: {
    padding: 16
  }

});
