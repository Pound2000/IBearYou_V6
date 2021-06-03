import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';



class checkup2 extends Component {
 

  render() {
    return (
      <View>
      <Bg2/>
<View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center',marginTop: 100}}>

       <Text style={{color: '#E79995',
       fontSize: 25}} title="checkup2">
     ใช่>คุณกําลังรู้สึกเศร้าหรือเครียดอยู่ใช่ไหม</Text>

       </View>

     <View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
<View >
     <TouchableOpacity
       style={{marginTop:40, borderRadius: 10,
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
ใช่     </Text>
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
     <Text style={{color:'#000000',frontSize: 16,marginLeft: 30}} title="checkup3">
 ไม่ใช่     </Text>
     </TouchableOpacity>

       
     </View>
   
    </View>
    </View>
 


   
  
   );
 }
}
 
export default checkup2;
