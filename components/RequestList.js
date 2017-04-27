import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import ItemRequest from './itemRequest';

export default class RequestList extends Component {
  constructor(props) {
    super(props);

    const Request = {
      article: "Bicicleta",
      description: "Necesito una bicileta grande y azul con velocidades extremas y",
      date: "03-Feb-2017",
      active: true
    };

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const Requests = Array(50).fill(Request);
    this.state = {
      dataSource: ds.cloneWithRows(Requests)
    };
  }
  render() {
    return (
      <ListView style={styles.container}
        dataSource= {this.state.dataSource}
        renderRow={(rowData)=> <ItemRequest request={rowData} />  }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16
  }
});
