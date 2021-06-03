import React, {Component} from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import login from './login';

import checkup1 from './checkup1';
import checkup2 from './checkup2';
import checkup3 from './checkup3';
import checkup4 from './checkup4';
import checkup5 from './checkup5';
import checkup6 from './checkup6';
import checkup7 from './checkup7';
import checkup8 from './checkup8';

import resultScreen from './resultScreen';

const StackApp = createStackNavigator();

export default function navigation() {
  
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="checkup1">
      <StackApp.Screen name="checkup1" components={checkup1} />
      <StackApp.Screen name="checkup2" components={checkup2} />
      <StackApp.Screen name="checkup3" components={checkup3} />
      <StackApp.Screen name="checkup4" components={checkup4} />
      <StackApp.Screen name="checkup5" components={checkup5} />
      <StackApp.Screen name="checkup6" components={checkup6} />
      <StackApp.Screen name="checkup7" components={checkup7} />
      <StackApp.Screen name="checkup8" components={checkup8} />

      <StackApp.Screen name="resultScreen" components={resultScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

