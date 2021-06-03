/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';




class home  extends Component{




    


  render() {
     return (
        <View style={styles.container}>
           
       <Bg1/>

        </View>      
       
       
    );
  }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: -10,
    },

  


});

export default home ;
