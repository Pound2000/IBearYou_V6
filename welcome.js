import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView,Button, TouchableHighlight,Alert } from 'react-native';
 
 
class welcome extends Component{
 
 constructor(props) {
   super(props)
   this.state = { text: '' };
 }
 
   clickMe() {
       Alert.alert("Just Click");
   }
  
 
 render() {
   return (
         <SafeAreaView style={[styles.container, containerStyle]}>
 
  <View style = {styles.button}>
   <TouchableHighlight onPress={this.clickMe} underlayCoror='#FDF5F5'>
       <View style = {styles.buttonLogin}>  
           <Text style = {styles.textLogin}>Login</Text>  
       </View>
   </TouchableHighlight>
  <TouchableHighlight onPress={this.clickMe} underlayCoror='#FDF5F5'>
  <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Register</Text>  
       </View>
   </TouchableHighlight>
  </View>
 
   </SafeAreaView>    
   );
 }
}
 
 
const containerStyle = {
       backgroundColor: '#E79995',
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
   button: {
       marginTop: 580
   },
 
   buttonLogin: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#FFFFFF',
       height: 39,
       width: 327,
      
   },
 
     buttonRegister: {
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 39,
       width: 327,
       borderRadius: 5,
       marginTop: 20,
       borderWidth: 1,
       borderColor: '#FFFFFF'
 
  
   },
 
   textLogin: {
       color: '#000000',
       fontSize: 20,
   },
 
   textRegister: {
       color: '#FFFFFF',
       fontSize: 20,
   }
 
 
 
});
 
export default welcome;
 
 
