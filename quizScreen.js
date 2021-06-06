import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
//import SwitchSelector from "react-native-switch-selector";
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import {CompositeNavigationProp} from '@react-navigation/native' ;
import SwitchSelector from "react-native-switch-selector";

const switchOption = [
  {label: 'Check-up', value: 'Check-up'},
  {label: 'History', value: 'History'},
];
 
class quizScreen extends Component{
 
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
 
<SafeAreaView>
<View>
<Bg2/>
 
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
      height = {38}

      style={{
      shadowColor: '#000000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity:  0.20,
      shadowRadius:3,
      elevation: 2,
      width: 290,
}}
    />

</View>
 
      <View style={styles.textHeaderStyle}>
    
       <Text style={styles.textHeader}>Hi Riboots !</Text>
      </View>
 
      <View style={{alignItems: 'center',}}>
       <Text style={styles.textContent}>วันนี้เป็นยังไงบ้าง มาทบทวนตัวเองไปกับน้องหมีกันไหม?</Text>
     </View>
 
 
 
<View style={{flexDirection: 'row', height: 50, marginTop: 5}}>
     <View style={{flex: 1, alignItems: 'center',}}>
    
        <Image source={require('./assets/images/Card.png')}
     style={styles.image} /> 
    
  </View>
  </View>
    
    
     <View style = {styles.button}>
        <TouchableHighlight onPress={() => {
 
        }} >
         <View style = {styles.buttonStart}>  
           <Text  style = {styles.textStart}>Let's Get Started</Text>  
         </View>
        </TouchableHighlight>
     </View>  
 
    </View>

  </SafeAreaView>
 
   );
 }
}
 
 
const styles = StyleSheet.create({
 container: {
       backgroundColor: '#FFFFFF',
       alignItems: 'center',
       justifyContent: 'center',
       width: '100%',
       height: '100%'
   },
 
 textHeaderStyle: {
  
   alignItems: 'flex-start',
  
   marginLeft: 35,
     
 },
 
 textHeader: {
       color: '#E79995',
       fontSize: 36,
       marginTop: 35,
       paddingBottom: 20 ,
      
      
 
   },
 textContent: {
       color: '#000000',
       fontSize: 18,
       paddingLeft: 50,
       paddingRight: 50,
       marginBottom: 25,
      
      
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
       marginTop: 250,
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
       marginTop: -1,
       overflow: "hidden",
      
      
   },
 
   textStart: {
     color: '#FFFFFF',
     fontSize: 20,
   }
 
});
 
export default quizScreen;
