import React from 'react'; 
import {View, Text, Platform, ScrollView, Dimensions, StyleSheet, TouchableOpacity,Image} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
navLink(nav,text) {
  return(
    <TouchableOpacity style={{ height: 50}} onPress = {() => this.props.navigation.navigate(nav)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

_signOut = () => {
  firebase.auth()._signOut().then(function(){
    this.props.navigation.navigate('Auth');
  }).catch(function (error){
    console.log(error)
  });
};

render() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
      <View style={styles.topLinks}>
        <View style={styles.profile}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={require('../assets/indar.JPG.jpg')}/> 
            </View>
            <View style={styles.profileText}>
                <Text style={styles.name}>INDAR_CHIMY</Text>
            </View>
        </View>
      </View>
      <View style={styles.bottomLinks}>
            {this.navLink('Home', 'Home')}
            {this.navLink('Links', 'Link')}
            {this.navLink('SettingScreen', 'Setting')}
            {this.navLink('Camera', 'Camera')}
            {this.navLink('Location', 'Location')}
            {this.navLink('Map', 'Map')}
            {this.navLink('Todo', 'Todo')}

            <TouchableOpacity style={{ height: 50 }} onPress=
            {this._signOut}>
              <Text style={styles.link}>LogOut</Text>
            </TouchableOpacity>
      </View>
          </ScrollView>
          <View style={styles.footer}>
              <Text style={styles.description}>Android Version</Text>
              <Text style={styles.version}>7.1</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightgray',
  },
  scroller: {
    flex: 1,
  },
  profile:{
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#777777', 
  },
  profileText:{
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name:{
    fontSize: 20,
    paddingBottom: 5,
    color: 'white',
    textAlign: 'left',
  },
  imgView:{
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img:{
    height: 70,
    width: 70,
    borderRadius: 50, 
  },
  topLinks:{
    height: 160,
    backgroundColor: 'darkblue',
  },
  bottomLinks:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450,
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
  footer: {
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'gray',
  },
  description:{
    flex: 1,
    marginLeft: 20,
    fontSize: 12,
  },
})
