import React from 'react';
import Login from './src/Login';
import HomePage from './src/HomePage';
import DrawerNavigator from './navigation/DrawerNavigator';
import {createSwitchNavigator,createStackNavigator,createBottomTabNavigator,createAppContainer, createDrawerNavigator} from "react-navigation";
import LinkScreen from './src/LinkScreen';
import SettingScreen from './src/SettingScreen';
import firebase from "firebase";

const LoginNavigasi = createSwitchNavigator(
  {
    Login:Login,
  }
)
const Navigasi = createSwitchNavigator(
  {
    Login:LoginNavigasi,
    Drawer:DrawerNavigator,
  },
  {initialRouteName:'Login'}
)
const AppContainer = createAppContainer(Navigasi);
export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCYmo-a87FADbt6zVSXyAz7VoL6fBk1eFc",
    authDomain: "login-855a9.firebaseapp.com",
    databaseURL: "https://login-855a9.firebaseio.com",
    projectId: "login-855a9",
    storageBucket: "login-855a9.appspot.com",
    messagingSenderId: "693154370499",
    appId: "1:693154370499:web:69fd365374813897"
    })
  }
  render() {
    return (
      // <HomePage/>
      <AppContainer/>
      // <DrawerNavigator/>
    );
  }
}

