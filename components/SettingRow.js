import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Platform
} from 'react-native';

import colors from '../components/colors';

export default class SettingRow extends Component {

  state = {
    switchState : false
  };

  render() {
    return (
      <View style={styles.settingRow} >
        <Text style={ styles.settingOption }>
          { this.props.concept }
        </Text>
        <View style={styles.settingSwitchContainer}>
        {
          (Platform.OS === "ios")? (
            <Switch
              onValueChange ={ (value)=> { this.setState({switchState: value}) } }
              onTintColor = {colors.accent2}
              value={this.state.switchState}
              />
          ) : (
            <Switch
              onValueChange ={ (value)=> { this.setState({switchState: value}) } }
              thumbTintColor = {colors.accent2}
              onTintColor={colors.accent2Clear}
              value={this.state.switchState}
              />
          )
        }
        </View>
      </View>
    );
  }
}

SettingRow.defaultProps={
  concept: "Setting concept"
};

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center'
  },
  settingOption: {
    flex: 3,
    fontWeight: '100',
    fontSize: 16,
  },
  settingSwitchContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
