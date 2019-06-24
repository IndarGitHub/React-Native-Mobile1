import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {createDrawerNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomePage from '../src/HomePage';
import LinkScreen from '../src/LinkScreen';
import SettingScreen from '../src/SettingScreen';
import ProfilPage from '../src/ProfilePage';
import MenuDrawer from '../components/MenuDrawer';
import CameraScreen from '../Screen/CameraScreen';
import LocationScreen from '../Screen/LocationScreen';
import MapScreen from '../Screen/MapScreen';
import TodoScreen from '../Screen/TodoScreen';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({navigation}) => {
        return(<MenuDrawer navigation={navigation} />)
}
}
const TabNavigasi = createBottomTabNavigator(
{
    Home:HomePage,
    Profile:ProfilPage,   
},
{initialRouteName:'Home'}
)

const DrawerNavigator = createDrawerNavigator(
    {
    Home:{
        screen:TabNavigasi
        },
    Links:{
        screen:LinkScreen
        },
    SettingScreen:{
        screen:SettingScreen
        },
    Camera:{
        screen:CameraScreen
    },
    Location:{
        screen:LocationScreen
    },
    Map:{
        screen:MapScreen
    },
    Todo:{
        screen:TodoScreen
    }
    },
    DrawerConfig
);
export default createAppContainer(DrawerNavigator);

