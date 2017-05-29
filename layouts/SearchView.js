import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import NavBar from '../components/NavBar';
import SendButton from '../components/SendButton';
import colors from '../components/colors';
import Loader  from '../components/Loader';
import {Actions} from 'react-native-router-flux';
import {
  updateMyCoords,
  postMyRequest
} from '../components/api/client';

export default class SearchView extends Component {

  state = {
    location: "",
    sendPendant : false,
    showLoader : false,
    article: '',
    description: ''
  }

  messages = {
    errorMessage: ''
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
          updateMyCoords(this.props._id, this.state.location.latitude, this.state.location.longitude)
            .then( response => {
              this.postRequest();
            })
            .catch( err => {
              Alert.alert("Error", JSON.stringify(err));
            });
      }
      else if (!this.state.showLoader) {
        this.setState({'showLoader': true});
      }
    }
  }

  tester () {
    if (this.state.article === '') {
      this.messages.errorMessage ='El campo artículo no puede estar vacio.';
      return false;
    } else if ( this.state.description === '') {
      this.messages.errorMessage ='El campo descripción no puede estar vacio.';
      return false;
    } else {
      if(this.findNotAllowed(this.state.article)) {
        this.messages.errorMessage ='El campo artículo contiene informacíon no válida.';
        return false;
      } else if (this.findNotAllowed(this.state.description)) {
        this.messages.errorMessage ='El campo descripción contiene informacíon no válida.';
        return false;
      } else {
        return true;
      }
    }
  }

  warnMessage() {
    console.warn(this.messages.errorMessage);
  }

  postRequest() {
    postMyRequest(this.props._id, this.state)
      .then(response => {
        this.props._return();
        Actions.pop();
      })
      .catch(err => console.warn("Error: "+err.message) );
  }

  findNotAllowed(m_text) {
    const joined = m_text.replace(/\s/g,'');
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
              value={this.state.article}
              onChangeText = {(text) => {
                this.setState({'article': text});
              } }
              />
            </View>

            <View style={styles.InputsRow}>
              <Text style={styles.InputLabel}> Descripción (140 caracteres) </Text>
              <TextInput
              style={[styles.inputStyle , styles.descriptionInput]}
              multiline={true}
              maxLength={140}
              underlineColorAndroid= {colors.lineColor}
              value={this.state.description}
              onChangeText = {(text) => {
                this.setState({'description': text});
              } }
              />
            </View>

          </View>
        </ScrollView>
        <SendButton handlePress = { () => {
          (this.tester())? this.setState({'sendPendant': true}): this.warnMessage();
        }}/>

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
