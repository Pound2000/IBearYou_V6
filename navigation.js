import * as React from 'react';
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


function CustomHeader({title}) {
  return (
    <View style={{flexDirection: 'row',height: 50, borderWidth: 1, borderColor: 'pink'}}>

  <View style={{flex: 1.5, justifyContent: 'center', borderWidth: 1, borderColor: 'pink'}}>
    <Text style={{textAlign: 'center'}}>I Bear You</Text>
    </View>
     </View>
  );
}


function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Home'/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
          <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Go to graph </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Graph() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Graph'/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function CalendarScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Calendar' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar!</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Let's Get Started </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function MoodScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Mood' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How do you feel?</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Let's Get Started </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function DairyScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Dairy' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>What happened today?!</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Let's Get Started </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function CheckupScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
         <CustomHeader title='Checkup'/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checkup!</Text>
          <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Let's Get Started </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function StartCheckupScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
         <CustomHeader title='StartCheckup'/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checkup!</Text>
          <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Next </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function VoiceScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Voice' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Voice!</Text>
            <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Start Record  </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function AlarmScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Alarm' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alarm Setting!</Text>
            <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Start Alarm setting  </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Profile' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
           <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Setting  </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}


function SettingScreen() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Profile' />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting!</Text>
    </View>
     </SafeAreaView>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Graph' component={Graph}/>
     </Stack.Navigator>

  )
}

function DairyStack() {
  return (
    <Stack.Navigator initialRouteName='Calendar'>
      <Stack.Screen name='Calendar' component={CalendarScreen}/>
      <Stack.Screen name='Dairy' component={DairyScreen}/>
      <Stack.Screen name='Mood' component={MoodScreen}/>
     </Stack.Navigator>

  )
}

function CheckupStack() {
  return (
    <Stack.Navigator initialRouteName='Checkup'>
      <Stack.Screen name='Checkup' component={CheckupScreen}/>
      <Stack.Screen name='StartCheckup' component={StartCheckupScreen}/>
     </Stack.Navigator>

  )
}

function BearStack() {
  return (
    <Stack.Navigator initialRouteName='Voice'>
      <Stack.Screen name='Voice' component={VoiceScreen}/>
      <Stack.Screen name='Alarm' component={AlarmScreen}/>
     </Stack.Navigator>

  )
}

function Profiletack() {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={ProfileScreen}/>
      <Stack.Screen name='Setting' component={Graph}/>
     </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dairy" component={CalendarScreen} />
        <Tab.Screen name="Checkup" component={CheckupScreen} />
        <Tab.Screen name="Voice" component={VoiceScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}