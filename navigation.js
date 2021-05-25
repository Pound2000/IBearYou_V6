import React, {Component} from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import login from './login';

const StackApp = createStackNavigator();

export default function navigation() {
  
  return (
    <NavigationContainer>
     
    </NavigationContainer>
  );
}

