import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions,TextInput}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';



class checkup8 extends Component {
 
 
   constructor(props) {
     super(props);
     this.state = { text : ''
     };
   }
 

  render() {
    return (
      <View>
      <Bg2/>
<View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center',marginTop: 100}}>

       <Text style={{color: '#E79995',
       fontSize: 20,marginLeft: 20, marginRight: 20}} title="checkup8">งั้นเรามาลอง list หนี้หรือค่าใช้จ่ายทั้งหมดกันก่อนนะ</Text>

       </View>

     <View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
<View >
        <TextInput 
        style={styles.input}
         placeholder="Text"
            autoCapitalize='none'
            
      />

     

     </View>

     <TouchableHighlight onPress={() => navigation.navigate('resaultScreen')}>
        <View style = {{borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E79995',
        height: 41,
        width: 102,
        borderWidth: 1,
        borderColor: '#E79995', 
        shadowColor: '#000000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity:  0.4,
       shadowRadius:5,
       elevation: 5,}}>   
            <Text style = {{color: '#FFFFFF',fontSize: 20}}>Next</Text>   
        </View>
    </TouchableHighlight>
   
    </View>
    </View>
   );
 }
}

const styles = StyleSheet.create({
    input:{
    height: 200,
    width : 300,
    margin: 30,
    borderWidth: 1,
    paddingLeft : 15,
    paddingBottom: 145,
    fontSize : 18,
    backgroundColor : '#FFFFFF',
    borderRadius: 5,
    borderColor : '#FFFFFF' ,
    shadowColor: '#E79995',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity:  4,
    shadowRadius:5,
    elevation: 3,
    },
   
  });

export default checkup8 ;