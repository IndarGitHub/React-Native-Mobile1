import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import MenuButton from '../components/MenuButton'


export default class LinkScreen extends Component {
render() {
  return (
    <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
      <Text style={styles.text}>LinkPage</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems: 'center'
},
button: {
    width:'90%'
}
});