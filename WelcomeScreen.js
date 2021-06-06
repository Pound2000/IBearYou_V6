import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';



class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   return (
    <SafeAreaView style={[styles.container, containerStyle]}>
    <View style={styles.button}>
           <TouchableOpacity
        style={{marginTop: 20}}
         onPress={() => this.props.navigation.navigate('Login')}
        >
           <View style = {styles.buttonLogin}>  
         <Text style = {styles.textLogin}>Login</Text>  
           </View>
      </TouchableOpacity>

           <TouchableOpacity
        style={{marginTop: 20}}
         onPress={() => this.props.navigation.navigate('Register')}
        >
       <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Register</Text>  
       </View>
      </TouchableOpacity>
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
       marginTop: 580,
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center' ,
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
       marginTop: 3,
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

export default WelcomeScreen;
