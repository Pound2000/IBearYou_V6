import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions,TextInput}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';

class typeMessage extends Component {
 
 
   constructor(props) {
     super(props);
     this.state = { text : ''
     };
   }
 

  render() {
    return (
      <SafeAreaView>

      <View style={{flex: 1, alignItems : 'flex-start'}}>
 <CustomHeader title='typeMessage'  navigation={this.props.navigation}/>
 </View>

      
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
   
    </View>

 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 30}}>
  <TouchableOpacity style={styles.button} activeOpacity ={0.75}
     onPress = {() => this.props.navigation.navigate('choices')}
   >
       <Text style={styles.textButton}>ย้อนกลับ</Text>
  </TouchableOpacity>
 
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
       onPress ={() => this.props.navigation.navigate('StartCheckup')}
     >
       <Text style={styles.textButton}>บันทึก</Text>
     </TouchableOpacity>
</View>

    </SafeAreaView>
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
   

  textButton:{
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
        
},

button:{
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 102,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
       margin: 60,
       marginBottom: -40,
       marginLeft: 45
        
},

});

export default typeMessage ;