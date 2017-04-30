import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import NavBar from '../components/NavBar';
import SectionHeader from '../components/SectionHeader';
import SettingRow from '../components/SettingRow';
import ContactData from '../components/ContactData';
import {Actions} from 'react-native-router-flux';
import colors from '../components/colors';

export default class SettingsView extends Component {
  render() {
    const userData = {
      telephone: "5540128869",
      email: "hi@evesan.rocks",
      picture: "https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/17076298_1448529028525613_7344673176019795968_a.jpg"
    };
    return (
      <ScrollView style={styles.container}>
        <NavBar settingsButton={false} backButton={true} />
        <SectionHeader title="Concurrencia" />
        <SettingRow concept="Mantener la búsqueda hasta seleccionar un vendedor." />

        <SectionHeader title="Notificaciones" />
        <SettingRow concept="Recibir de solicitantes" />

        <SectionHeader title="Datos de contacto" />
        <ContactData data = {userData} />

        <SectionHeader title="Paquete" />
        <SettingRow concept="Usuario Premium" />

        <SectionHeader title="Legal" />
        <View style={styles.legalContainer} >
          <TouchableHighlight>
            <Text style={[styles.links, {paddingBottom: 10}]}> Aviso de privacidad </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.links}> Términos del servicio </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  legalContainer: {
    padding: 16
  },
  links: {
    fontSize: 16,
    fontWeight: '100',
    color: colors.accent2
  }

});
