import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableHighlight,
  Platform,
  BackAndroid
} from 'react-native';

import FBSDK, {
  LoginButton
} from 'react-native-fbsdk';

import NavBar from '../components/NavBar';
import SectionHeader from '../components/SectionHeader';
import SettingRow from '../components/SettingRow';
import ContactData from '../components/ContactData';
import {Actions} from 'react-native-router-flux';
import colors from '../components/colors';
import {getManager} from '../components/realmManager';

export default class SettingsView extends Component {
  render() {

    loggedOut = ()=> {
      let realm = getManager();
      let user = realm.objects("User");
      realm.write( ()=> {
        realm.delete(user);
      });

      (Platform.OS ==='ios')? Actions.login({}) : BackAndroid.exitApp() ;
    }

    return (
      <View style={styles.container}>
        <NavBar settingsButton={false} backButton={true} />
        <ScrollView>
          <SectionHeader title="Concurrencia" />
          <SettingRow concept="Mantener la búsqueda hasta seleccionar un vendedor." />

          <SectionHeader title="Notificaciones" />
          <SettingRow concept="Recibir de solicitantes" />

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
          <SectionHeader title="Sesión" />
          <View style={[styles.legalContainer, {alignItems: 'center'}]} >
            <LoginButton
              onLogoutFinished={ loggedOut }/>
          </View>
        </ScrollView>
      </View>
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
