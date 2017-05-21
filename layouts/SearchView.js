import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  ScrollView
} from 'react-native';
import NavBar from '../components/NavBar';
import SendButton from '../components/SendButton';
import colors from '../components/colors';
import Loader  from '../components/Loader';

export default class SearchView extends Component {

  state = {
    location: "",
    sendPendant : false,
    showLoader : false
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({'location':  position.coords });
      },
      error => {
        console.warn("Error: "+error.message);
      }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000
      }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.sendPendant === true) {
      if (this.state.location.latitude !== undefined&&
          this.state.location.longitude !== undefined) {
          console.warn("fetching");
      }
      else if (!this.state.showLoader) {
        this.setState({'showLoader': true});
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <NavBar backButton={true}/>
        <ScrollView>
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
        </ScrollView>
        <SendButton handlePress = { () => { this.setState({'sendPendant': true}) } }/>
         {
           (this.state.showLoader) ? <Loader text="Enviando ..." />: null
         }
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
    backgroundColor: '#FFF'
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
