import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform
} from 'react-native';
import NavBar from '../components/NavBar';
import SendButton from '../components/SendButton';
import colors from '../components/colors';

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
            style={[styles.inputStyle, styles.articleInput]}
            maxLength={100}
            multiline={true}
            underlineColorAndroid= {colors.lineColor}
            />
          </View>

          <View style={styles.InputsRow}>
            <Text style={styles.InputLabel}> Descripción (140 caracteres) </Text>
            <TextInput
            style={[styles.inputStyle , styles.descriptionInput]}
            multiline={true}
            maxLength={140}
            underlineColorAndroid= {colors.lineColor}
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
    backgroundColor: colors.white
  },
  instructions: {
    backgroundColor: colors.primary,
    padding: 16,
    color: '#FFF',
    fontSize: 15,
    textAlign: 'justify',
    fontWeight: '100',
    lineHeight: 18
  },
  InputLabel: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.textColor
  },

  articleInput:  {
    height: 30
  },

  descriptionInput: {

    height: 120,
    padding: 4
  },

  inputStyle: {
    ...Platform.select({
      ios: {
        borderBottomColor: colors.lineColor,
        borderBottomWidth: 1,
      }
    }),
    fontSize: 14,
    padding: 4
  },

  InputsContainer: {
    padding: 16
  }

});
