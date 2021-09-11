import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import Bg_Rainy from './components/Bg_Rainy';

import CustomHeader from './CustomHeader';


class MoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
 return (
     <SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4'}}>
     
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      
 <View > 
       <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/rainy.png')}
    style={{width:392 ,height:294,marginTop: -17}} />  
</View>
    <View style={{flex: 1, alignItems : 'flex-start',marginTop:-30}}>   
 <CustomHeader title='Mood'  navigation={this.props.navigation}/>
 </View>
 
 <View style={styles.boxContent}>
        <Text style={styles.textContent}>วันนี้เธอรู้สึกอย่างไร</Text>
</View>

<View style={{marginTop: -400}}>

       <View style={styles.clickVeryGood}></View>

        <TouchableOpacity style={styles.buttonVeryGood} activeOpacity={1}> 
        <Text style={styles.textMood}>รู้สึกอารมณ์ดีมาก</Text>
         <Image source={require('./assets/images/bear-verygood.png')}
        style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}} 
        /> 
      </TouchableOpacity>
      </View>

      <View style={styles.clickGood}></View>

        <TouchableOpacity style={styles.buttonGood} activeOpacity={1}>
        <Text style={styles.textMood}>รู้สึกอารมณ์ดี</Text>
         <Image source={require('./assets/images/bear-good.png')}
        style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}} 
        /> 
      </TouchableOpacity>

      <View style={styles.clickIndifferent}></View>

        <TouchableOpacity style={styles.buttonIndifferent} activeOpacity={1}>        
        <Text style={styles.textMood}>รู้สึกเฉยๆ</Text>
         <Image source={require('./assets/images/bear-indifferent.png')}
        style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}} 
        /> 
      </TouchableOpacity>

      <View style={styles.clickBad}></View>

        <TouchableOpacity style={styles.buttonBad} activeOpacity={1}>
        <Text style={styles.textMood}>รู้สึกอารมณ์ไม่ค่อยดี</Text>
         <Image source={require('./assets/images/bear-bad.png')}
        style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}} 
        /> 
      </TouchableOpacity>

      <View style={styles.clickVeryBad}></View>

        <TouchableOpacity style={styles.buttonVeryBad} activeOpacity={1}>
        <Text style={styles.textMood}>รู้สึกอารมณ์ไม่ดีเลย</Text>
         <Image source={require('./assets/images/bear-verybad.png')}
        style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}} 
        /> 
      </TouchableOpacity>
</View>

<Image source={require('./assets/images/bear-rain.png')}
        style={{width:100.56,height:104.02,marginTop: -38,marginLeft: -20,marginBottom: -35}} 
        /> 

<Image source={require('./assets/images/polygon2.png')}
        style={{width:201.655,height:118.87,marginTop: -38,marginLeft: -320,marginBottom: -40}} 
        />

<Image source={require('./assets/images/footprint.png')}
        style={{width:48,height:18.78,marginTop: -38,marginLeft: -120,marginBottom: 55}} 
        />


    </View>

<View>
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('Diary')}
        style={styles.buttonNext} activeOpacity={1} activeOpacity={0.75}>
        <Text style={styles.textNext}>ถัดไป</Text>
        </TouchableOpacity>
</View>


     </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({

    boxContent:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginBottom: 490,
      marginLeft: 80,
      borderRadius: 10,
      shadowColor: '#87D6E8',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
    },

    textContent: {
     color: '#000000',
     fontSize: 24,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 10,
    },

    buttonVeryGood: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#70BA97',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -69,
      marginBottom: 15,
      marginLeft: 40,
    },

      buttonGood: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#FFF96E',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginTop: -69,
      marginLeft: 40,
    },

      buttonIndifferent: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#FFAD8A',
       borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginTop: -69,
      marginLeft: 40,
    },

      buttonBad: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#87D6E8',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginTop: -69,
      marginLeft: 40,
    },

      buttonVeryBad: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#00576A',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 60,
      marginTop: -69,
      marginLeft: 40,
    },

    textMood: {
     color: '#000000',
     fontSize: 18,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 15,
     marginTop: 12,
    
    },

    clickVeryGood: {
      height: 70,
      width: 414,
      backgroundColor: '#70BA97',
      marginBottom: 10,
     
    },

    clickGood: {
      height: 70,
      width: 414,
      backgroundColor: '#FFF96E',
      marginBottom: 10,
    },

    clickIndifferent: {
      height: 70,
      width: 414,
      backgroundColor: '#FFAD8A',
      marginBottom: 10,
    },

    clickBad: {
      height: 70,
      width: 414,
      backgroundColor: '#87D6E8',
      marginBottom: 10,
    },

    clickVeryBad: {
      height: 70,
      width: 414,
      backgroundColor: '#00576A',
      marginBottom: 10,
    },

buttonNext: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 102,
       marginTop: -55,
       marginBottom: 30,
       marginLeft: 260,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
},

textNext: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
}

    });

export default MoodScreen;
