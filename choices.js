import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';



class choices extends Component {

  render() {

let {navigation} = this.props 

    return (
      <SafeAreaView>
      
<View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>

<View style={{flex: 1, alignItems : 'flex-start'}}>
 <CustomHeader title='choices'  navigation={this.props.navigation}/>
 </View>

       <Text style={{color: '#E79995',
       fontSize: 25,marginTop: 60}} title="checkup1">วันนี้เป็นยังไงบ้าง</Text>

       </View>

     <View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
<View >
     <TouchableOpacity
     onPress={() => this.props.navigation.navigate('typeMessage')}
       style={{marginTop:30, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={{color:'#000000',frontSize: 16,marginLeft: 30}}>
     อารมณ์ดีมาก
     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={{color:'#000000',frontSize: 16,marginLeft: 30}}>
 อารมณ์ดี     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={{color:'#000000',frontSize: 16,marginLeft: 30}}>
     รู้สึกเฉยๆ
     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={{color:'#000000',frontSize: 16,marginLeft: 30}}>
     ไม่ค่อยดี
     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={{color:'#000000',frontSize: 16,marginLeft: 30}}>
     รู้สึกเศร้า
     </Text>
     </TouchableOpacity>
     </View>
   
    </View>

 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 30}}>
  <TouchableOpacity style={styles.button} activeOpacity ={0.75}
     onPress = {() => this.props.navigation.navigate('StartCheckup')}
   >
       <Text style={styles.textButton}>ย้อนกลับ</Text>
  </TouchableOpacity>
 
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
       onPress ={() => this.props.navigation.navigate('typeMessage')}
     >
       <Text style={styles.textButton}>บันทึก</Text>
     </TouchableOpacity>
</View>

    </SafeAreaView>
 


   
  
   );
 }
}
 
const styles = StyleSheet.create({

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
       marginBottom: -160,
      marginLeft: 45
        
},

});

export default choices;
