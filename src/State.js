import React from 'react'
import {TextInput,View,Text,StyleSheet} from 'react-native';

export default class state extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nama:''
        }
    }
render(){
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="Input your name"
                onChangeText={(text)=> {this.setState({nama: text})}}
            />
            <Text>{this.state.nama}</Text>
        </View>
    );
}
}

const styles=StyleSheet.create({
    input:{
        borderColor: '#000000',
        borderRadius: 5,
        width:300,
        backgroundColor: '#000000',
        color:'#fff',
        padding: 5,
        justifyContent: 'center',
        paddingLeft: 100,
    }
})