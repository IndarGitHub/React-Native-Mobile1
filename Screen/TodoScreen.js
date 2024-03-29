import React, { Component } from 'react';
import { KeyboardAvoidingView,TextInput, View, Text, Button, ActivityIndicator,StatusBar,FlatList } from 'react-native';
import * as firebase from "firebase";
import 'firebase/firestore';

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('todos');
    this.unsubcribe = null;
    this.state = {
        title:'',
        todos:[],
        loading:true,
    }
  }

componentDidMount(){
    this.unsubcribe = this.ref.onSnapshot(this.onCollectionUpdate);
}
componentWillUmount(){
    this.unsubcribe();
}
onCollectionUpdate = (querySnapshot) =>{
    const todos =[];
    querySnapshot.forEach((doc)=>{
        const{title,complete}=doc.data();
        todos.push({
            key:doc.id,
            doc,
            title,
            complete
        });
    });
    this.setState({todos,loading:false});
}
_addData=()=>{
    this.ref.add({
        title:this.state.title,
        complete: false
    });
    this.setState({title:''})
    this.unsubcribe=this.ref.onSnapshot(this.onCollectionUpdate);
}

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
            <View style={{ flexDirection:'row',margin:10 }}>
                <TextInput
                    placeholder="Todos"
                    value={this.state.title}
                    onChangeText={(text)=>this.setState({title:text})}
                    style={{ width:'80%',padding:5,borderColor: '#ccc',
                        borderBottonWidth: 1,}}
                />
                <Button
                    title="Add"
                    disable={!this.state.title.length}
                    onPress={this._addData}
                />
            </View>
        </KeyboardAvoidingView>
    )
  }
}
