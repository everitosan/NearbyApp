import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import colors from './colors';

export default class InteresModal extends Component {

  handleOk() {
    this.props.cancel();
  }

  handleCall() {

  }

  render() {
    const {name, picture, telephone, email} = this.props.info;

    return (
      <View style={styles.container}>
        { (this.props.type === "buy")?(
          <View>
            <Text style={styles.title}> Haz elegido la oferta de {name}</Text>
            <Text style={styles.text}> La oferta se cerró, aquí tienes sus datos.</Text>
          </View>
        ):(
          <View>
            <Text style={styles.title}> Interés en la oferta de {name}</Text>
            <Text style={styles.text}> La oferta no se cerrará así que ténlo en consideración.</Text>
          </View>

        ) }


        <View style={styles.personal}>
          <Image  style={styles.picture} source={{uri: picture}}  />
          <View style={styles.data}>
            {
              (telephone !== undefined) &&
                <Text> Teléfono: {telephone} </Text>
            }

            {
              (email !== undefined) &&
                <Text> Email: {email} </Text>
            }
          </View>
        </View>

        <View style={styles.buttons}>
          <View
            style={{flex: 1 }}>
            <Button
              color={colors.appleBlue}
              title="Llamar"
              onPress={()=> this.handleCall()}/>

          </View>
          <View
            style={{borderLeftWidth: 1, borderLeftColor: colors.lineColor, flex: 1 }}>
            <Button
              color={colors.appleBlue}
              title="Ok"
              onPress={()=> this.handleOk()}/>
            </View>

        </View>
      </View>
    );
  }
}

InteresModal.defaultProps = {
  info: {
    name: "Yanek",
    picture: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/16997980_10211993067244493_6672204882497442977_n.jpg?oh=94951db44eb9b73d561591bcd32e947e&oe=59B8B2DB",
    telephone: '5540128869',
    email: 'yanek@gmail.com'
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    paddingTop: 16,
    overflow: 'hidden'
  },
  title: {
    fontSize: 17,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    marginBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '100',
    paddingRight: 16,
    paddingLeft: 16,
  },
  personal: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 16,
    paddingLeft: 16,
  },
  picture: {
    width: 48,
    height: 48,
    borderRadius: (48/2)
  },
  buttons :{
    borderTopWidth: 1,
    borderTopColor: colors.lineColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    paddingBottom: 3,
    paddingTop: 3
  }

});
