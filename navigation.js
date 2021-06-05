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


function CustomHeader({title,isHome,navigation}) {
  return (
    <View style={{flexDirection: 'row',height: 50}}>
<View>
{
  isHome?
  
    null
    :
    <View>
   
    <TouchableOpacity
    style={{flexDirection:'row', alignItems: 'center'}}
    onPress = {() => navigation.goBack()}
    > 
    <Image source={require('./assets/images/back.png')} 
    style={{width: 14.32,height:26,marginLeft: 20}} 
    resizeMode='contain'
    />
    </TouchableOpacity>
    </View>
}
</View>

  <View style={{flex: 1.5, justifyContent: 'center'}}>
    <Text style={{textAlign: 'center'}}>I Bear You</Text>
    </View>
     </View>
  );
}


function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Home' isHome={true} navigation={navigation} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
          <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Graph')}
        >
        <Text> Go to graph </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Graph({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Graph' navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function CalendarScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Calendar' isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar!</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Mood')}
        >
        <Text> mood </Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={{marginTop: 20}}
        onPress ={() => navigation.navigate('Diary')}
        >
        <Text> diary </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function MoodScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Mood'  navigation={navigation}/>
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

function DiaryScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Diary'  navigation={navigation}/>
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

function CheckupScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
         <CustomHeader title='Checkup'isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Checkup!</Text>
          <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('StartCheckup')}
        >
        <Text> Let's Get Started </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function StartCheckupScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
         <CustomHeader title='StartCheckup' navigation={navigation}/>
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

function VoiceScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Voice' isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Voice!</Text>
            <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Alarm')}
        >
        <Text> Start Record  </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}

function AlarmScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Alarm'  navigation={navigation}/>
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

function ProfileScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Profile' isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
           <TouchableOpacity
        style={{marginTop: 20}}
         onPress={() => navigation.navigate('Setting')}
        >
        <Text> Setting  </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
}


function SettingScreen({navigation}) {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Setting'  navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting detial!</Text>
    </View>
     </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name='Graph' component={Graph} options={navOptionHandler}/>
     </StackHome.Navigator>

  )
}

const StackDiary = createStackNavigator();

function DiaryStack() {
  return (
    <StackDiary.Navigator initialRouteName='Calendar'>
      <StackDiary.Screen name='Calendar' component={CalendarScreen} options={navOptionHandler}/>
      <StackDiary.Screen name='Diary' component={DiaryScreen} options={navOptionHandler}/>
       <StackDiary.Screen name='Mood' component={MoodScreen} options={navOptionHandler}/>
     </StackDiary.Navigator>

  )
}

const StackCheckup = createStackNavigator();

function CheckupStack() {
  return (
    <StackCheckup.Navigator initialRouteName='Checkup'>
      <StackCheckup.Screen name='Checkup' component={CheckupScreen} options={navOptionHandler}/>
      <StackCheckup.Screen name='StartCheckup' component={StartCheckupScreen} options={navOptionHandler}/>
     </StackCheckup.Navigator>

  )
}

const StackBear = createStackNavigator();

function BearStack() {
  return (
    <StackBear.Navigator initialRouteName='Voice'>
      <StackBear.Screen name='Voice' component={VoiceScreen} options={navOptionHandler}/>
      <StackBear.Screen name='Alarm' component={AlarmScreen} options={navOptionHandler}/>
     </StackBear.Navigator>

  )
}

const StackProfile = createStackNavigator();

function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName='Profile'>
      <StackProfile.Screen name='Profile' component={ProfileScreen} options={navOptionHandler}/>
      <StackProfile.Screen name='Setting' component={SettingScreen} options={navOptionHandler}/>
     </StackProfile.Navigator>

  )
}



export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/images/Home-Black.png') 
                : require('./assets/images/Home.png');
            } 
            else if (route.name === 'Diary') {
              iconName = focused 
               ? require('./assets/images/diary-black.png') 
               : require('./assets/images/diary.png');
            } 
            else if (route.name === 'Checkup') {
              iconName = focused 
               ? require('./assets/images/quiz.png')
               : require('./assets/images/quiz-pink.png') ;
            }
            else if (route.name === 'Bear') {
              iconName = focused 
               ? require('./assets/images/voice-black.png')
               : require('./assets/images/voice.png') ;
            }
             else if (route.name === 'Profile') {
              iconName = focused 
               ? require('./assets/images/profile.png')
               : require('./assets/images/profile.png') ;
            }
            
            return <Image source={iconName} style={{width:28 , height: 28}} 
            resizeMode='contain'/>;
          },

          showLabel : false
        })}
       tabBarOptions={{
          showLabel : false,
        }}
     >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Diary" component={DiaryStack} />
        <Tab.Screen name="Checkup" component={CheckupStack} />
        <Tab.Screen name="Bear" component={BearStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}