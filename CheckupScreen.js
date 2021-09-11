import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import BgQuiz from './components/BgQuiz';
import SwitchSelector from "react-native-switch-selector";

import CustomHeader from './CustomHeader';



const switchOption = [
  {label: 'Check-up', value: 'Check-up'},
  {label: 'History', value: 'History'},
];

class CheckupScreen extends Component {

 constructor(props) {
   super(props)
   this.state = {
     title:'',
     checkupSwitch:'',
   };
  }

  setSwitch(checkupSwitch) {
      this.setState({checkupSwitch:checkupSwitch});
    }


  render() {
  return (
     <SafeAreaView style={[styles.container, containerStyle]}> 
 
  

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bg-Blue.png')}
    style={{width:568 ,height: 580,marginTop:87,marginRight: 40}} />     
 </View>
        <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Vector-Pink.png')}
    style={{width:552.17 ,height: 323.61,marginTop: -180}} />     
 </View>

         <View style={{flex: 1, alignItems : 'flex-start',marginTop: -52}}>
 <CustomHeader title='CheckUp' isHome={true} navigation={this.props.navigation}/>
 </View>

<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:90.18, height: 90.18, marginTop:552,marginRight: 385}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18, marginTop: 70,marginRight: 185}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18,marginTop: 310,marginLeft: 385}} />     
    </View>

     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-4.png')}
    style={{width:40.33, height: 40.33,marginTop: 500}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-5.png')}
    style={{width:28.3, height: 28.3,marginTop: 400,marginRight: 350}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-7.png')}
    style={{width:18.38, height: 18.38,marginTop: 62,marginLeft: 300}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center'}}>  
       <Image source={require('./assets/images/Star-8.png')}
    style={{width:34.3, height: 34.3,marginTop: -15,marginLeft: -10}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-9.png')}
    style={{width:21.68, height: 21.68,marginTop: -25,marginRight: 320}} />     
 </View>

      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bear-Cupid.png')}
    style={{width:145.52, height: 155.24,marginTop: 270,marginRight: -200}} />     
 </View>
   
     <View style={{flexDirection: 'row' ,justifyContent: 'space-around', alignItems: 'center'}}>
 
      
    <SwitchSelector
      options={switchOption}
      initial={0}
      onPress={value => this.setSwitch(value)}
      textColor='#565656' 
      fontSize={16}
      selectedColor='#FFFFFF'
      buttonColor='#FE8150'
      backgroundColor='#FFE0D4'
      height = {37}

      style={{
      shadowColor: '#000000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity:  0.20,
      shadowRadius:3,
      elevation: 2,
      width: 290,
      marginTop: -320,
}}
    />

</View>
 
        

<View style={styles.textHeaderStyle}>
    
       <Text style={styles.textHeader}>Hi Riboots !</Text>
      </View>
 
      <View style={styles.Content}>
       <Text style={styles.textContent}>วันนี้เป็นยังไงบ้าง มาทบทวนตัวเองไปกับน้องหมีกันไหม?</Text>
     </View>
   

      <View style = {styles.button}>
          <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => this.props.navigation.navigate('StartCheckup')}
        >
        <View style = {styles.buttonStart}>
        <Text style = {styles.textStart}> Let's Get Started </Text>
        </View>
      </TouchableOpacity>
    
     </View>
     </SafeAreaView>
  );
  }
}
const containerStyle = {
       backgroundColor: '#4C6FAF',
       width: '100%',
       height: '100%',
       flex:1 ,
       flexDirection: 'column' ,
          
}
 
const styles = StyleSheet.create({
  
  container: {  
     
       alignItems: 'center',
       justifyContent: 'center' 
        
  },
 
 textHeaderStyle: {
  flex: 1,
   alignItems: 'flex-start',
   marginLeft: -145,
     
 },
 
 textHeader: {
       color: '#E79995',
       fontSize: 36,
       marginTop: -70,
       
      
      
 
   },
 textContent: {
       color: '#000000',
       fontSize: 18,
       paddingLeft: '5%',
       paddingRight: '5%',
       marginTop: 100 ,
       fontFamily: 'Quark',

   },

  Content: {
      alignItems: 'center',
      width: 350,
      height: 230,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginTop: -45,
      marginBottom: 70
 
      

   },


 image: {
       width: 206,
       height: 263,
       resizeMode: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
      
      
   },
 
       button: {
         flex: 1,
       marginTop: 150,
       alignItems: 'center',
       justifyContent: 'center',
       shadowColor: "black",
       shadowOffset: { width: 0, height: 4 },
       shadowRadius: 3,
       shadowOpacity: 0.25,
       elevation: 3,
      
       
   },
 
   buttonStart: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 278,
       marginTop: -55,
       overflow: "hidden",
      
      
   },
 
   textStart: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
   }
 
});

export default CheckupScreen;
