import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Navigator } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
//import AppNavigator from './navigation/AppNavigator';
import { Container, Header, Content, Card, CardItem, Body, Text, H1, Button, Right } from 'native-base';
import {StackNavigator} from 'react-navigation'
import First from './screens/First';
import Home from './screens/Home'
import Login from './screens/Login';
import Courses from './screens/Courses';
import Persional from './screens/Persional';
import Tasks from './screens/Tasks';
import MainTabNavigator from './navigation/MainTabNavigator';
import 'expo';

// this is the main file which will show any other page
export default class App extends React.Component {

  render() {
    return (
      <First />
    )
  }
}


