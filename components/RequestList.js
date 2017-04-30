import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Platform,
  TouchableOpacity
} from 'react-native';
import ItemRequest from './itemRequest';
import {Actions} from 'react-native-router-flux';

class ListFooter extends Component {
  render () {
    return (
      <View style = {styles.ListFooter}>
      </View>
    );
  }
}

export default class RequestList extends Component {
  constructor(props) {
    super(props);

    const Request = {
      article: "Suéter",
      description: "Busco un suéter talla mediana para regalo de navidad. Me gustaría algo con dibujos animados o con colores llamativos.",
      date: "03-Feb-2017",
      active: true
    };

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const Requests = Array(10).fill(Request);
    this.state = {
      dataSource: ds.cloneWithRows(Requests)
    };
  }

  goDetail(request) {
    Actions.requestDetail({request: request});
  }

  render() {
    return (
      <ListView style={styles.container}
        dataSource= {this.state.dataSource}
        renderRow={(rowData)=> { return (
          <TouchableOpacity onPress={ () => this.goDetail(rowData)}  >
            <ItemRequest request={rowData}/>
          </TouchableOpacity>)
        }}
        renderSeparator={(sectionId, rowId)=>  <View key={rowId} style={styles.separator} /> }
        renderFooter = { () => <ListFooter/> }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16
  },
  separator: {
    flex:1,
    backgroundColor: '#E8E9EA',
    height: StyleSheet.hairlineWidth
  },
  ListFooter : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  }
});
