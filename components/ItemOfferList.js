import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Platform,
  TouchableOpacity
} from 'react-native';
import ItemOffer from './ItemOffer';
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

export default class ItemOfferList extends Component {

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
    this.updateDataSource(this.props.offers);
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.offers);
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
          <Text style={styles.empty}>Parece que aún no recibes ninguna oferta sobre el artículo. </Text>
        ) : (
          <ListView enableEmptySections={true}
            dataSource= {this.state.dataSource}
            renderRow={(rowData)=> { return (
              <TouchableOpacity onPress={ () => this.goDetail(rowData)}  >
                <ItemOffer offer={rowData}/>
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
