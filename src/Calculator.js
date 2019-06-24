import React, { Component } from 'react'
import { Text, View,Button,TextInput,StyleSheet } from 'react-native'

export default class Calculator extends Component {
constructor(props) {
  super(props)
  this.state = {
    USD:'',
    IDR:''
  };
}
_convert=()=>{
    this.setState({IDR: "RP."+this.state.USD*14000})
}
  render() {
    return (
      <View  style={styles.container}> 
        <TextInput style={styles.input}
        value={this.state.USD}
        onChangeText={(inputan)=>this.setState({IDR:inputan})}
        />
        <View>
         <Button
        onPress={this._Convert}
        title="Konveksi ke IDR"
        color="#4D62EA"
        />
        </View>
        <Text> {this.state.IDR} </Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#DD7783'
},
    image : {
        width:300,
        height:120,
        marginBottom:30,
        
     },
    input:{ 
        backgroundColor: 'white',
        borderRadius: 5,
        width:'90%',
        padding: 5,
        marginBottom:10,
    },
    button : { 
        width:'90%',
        marginBottom:10,
    }
});