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
import client from './database.js';



class home  extends Component{



//console.log(getChoices(10A));
    


  render() {
     return (
        <View style={styles.container}>
           
       <Bg1/>

{getChoices('10A')}
        </View>      
       
       
    );
  }
}

const getChoices = (id) => client.query(`SELECT * from Choices WHERE choiceid = '${id}'`, (err, res) => {
 return res;
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: -10,
    },

  


});

export default home ;
