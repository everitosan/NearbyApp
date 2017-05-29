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
import colors  from './colors';
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      isEmpty: true
    };
  }

  goDetail(request) {
    Actions.requestDetail({request: request});
  }

  componentDidMount() {
    this.updateDataSource(this.props.requests);
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.requests);
  }

  updateDataSource = (source) => {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(source) });
    if(source.length > 0 ) {
      this.setState({'isEmpty': false});
    }
  }

  render() {

    return (
      <View style={styles.container}>
      {
        this.state.isEmpty ? (
          <Text style={styles.empty}>Parece que aún no realizas ninguna búsqueda. Recuerda que puedes hacerlo en la lupa de abajo. </Text>
        ) : (
          <ListView enableEmptySections={true}
            dataSource= {this.state.dataSource}
            renderRow={(rowData)=> { return (
              <TouchableOpacity onPress={ () => this.goDetail(rowData)}  >
                <ItemRequest request={rowData}/>
              </TouchableOpacity>)
            }}
            renderSeparator={(sectionId, rowId)=>  <View key={rowId} style={styles.separator} /> }
            renderFooter = { () => <ListFooter/> }
          />
        )
      }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  empty: {
    paddingTop: 16,
    color: colors.textColor,
    textAlign: 'center',
    lineHeight: 28
  },
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
