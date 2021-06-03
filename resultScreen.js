import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

class resultScreen extends Component {
  

  render() {
    return (
      <View>
        <Bg2/>
       
 

    
 
 
<View style={{flexDirection: 'row', height: 50, marginTop: 50}}>
     <View style={{flex: 1, alignItems: 'center',}}>
    
      <View style={styles.textHeaderStyle}>
       <Text style={{color: '#E79995', fontSize: 30}}>Result</Text>
      </View>

        <Image source={require('./assets/images/Card.png')}
     style={styles.image} /> 
    
  </View>
  </View>

    <View style={{flexDirection: 'row', alignItems: 'center',height: 154 ,width: 350
    , backgroundColor: 'white',borderRadius: 10,marginTop: 300,marginLeft: 20, borderWidth: 2.5
    , borderColor : '#E79995' ,shadowColor: '#000000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
      }}>
<View style={{alignItems: 'center',paddingLeft: 30,paddingRight: 30}}>
<Text style={{ color: '#E79995',
      fontSize: 21,fontWeight: "bold",
      textAlign: 'center'}}>Spring will come soon</Text>
       <Text style={styles.textContent}>น้องหมีอยากให้คุณได้ลองคิดและทำตามคำแนะนำของน้องหมี น้องหมีเชื่อว่าคุณจะสามารถปลดหนี้ทั้งหมดได้อย่างแน่นอนน</Text>
     </View>
     </View>
 
  
</View>

    );
  }
}

const styles = StyleSheet.create({
    image :{
       width: 206,
       height: 263,
       resizeMode: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
       marginTop: 20,
    },

    textContent :{
      color: '#E79995',
      fontSize: 18,
      textAlign: 'center',
     
    }
});
 

export default resultScreen;
