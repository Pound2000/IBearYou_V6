import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
      , TouchableHighlight,TouchableOpacity, Dementions
      , TextInput}
      from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
 
import CustomHeader from './CustomHeader';
 
class DiaryScreen extends Component {
 
  constructor(props) {
    super(props);
    this.state = { good : '',
                   bad : '',
                   wish : '',
    };
   
  }
 
 
 render() {
   

return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4'}}>
     
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<View style={{flex: 1, marginTop : -610}}>
 <View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/rainy.png')}
   style={{width:392 ,height:294,marginTop: 540}} /> 
</View>


<View style={{flex: 1, alignItems : 'center',marginTop:610}}>  
   <CustomHeader title='Diary'  navigation={this.props.navigation}/>
</View>


<View style={{marginTop: -10}}>
  <View style={styles.buttonFeel}>
    <Text style={styles.textFeel}>วันนี้เป็นยังไงบ้าง</Text>
  </View>
</View>

</View>

<View style={{marginTop: 320}}>
 

</View>



<View >


<View style={{flex: 1}}>

  <View style={styles.page}></View>

  <View style={styles.spine}></View>

</View>


<View style={{marginTop: 270}}>
 <View style={{flex: 1}} >
 <Image source={require('./assets/images/line.png')}
   style={{width: 290,height:256,marginTop: 220,marginLeft: 35}}
   resizeMode='contain' />  
 </View>

<View style={{marginTop: 5}}>
 <View>
<Text style={styles.textDate}>10 กันยายน 2564</Text>
 </View>
<View style={styles.buttonEmoji}>
<TouchableOpacity activeOpacity={0.75}>
     <Text style={styles.textEmoji}>เลือกอิโมจิในวันนี้ของเธอ</Text>
      <Image source={require('./assets/images/pencil.png')}
   style={{width: 10.32,height:10.32,marginTop: -15,marginLeft:310}}
   resizeMode='contain'
  
    />
  </TouchableOpacity>
  </View>
</View>


<View style={{flex: 1,marginTop: 10}}>

<View style={{flex: 1,marginTop: -11}}>
  <Text style={styles.textType}>เรื่องราวที่ดี</Text>
   <TextInput placeholder="เขียนบันทึกเรื่องราวที่ดี"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onchangeText={ (good) => this.setState({good}) }
            style={styles.textContent}
 />
 </View>


 <View style={{flex: 1,marginTop: 18.5}}>
  <Text style={styles.textType}>เรื่องราวที่ไม่ดี</Text>
   <TextInput placeholder="เขียนบันทึกเรื่องราวที่ไม่ดี"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onchangeText={ (bad) => this.setState({bad}) }
            style={styles.textContent}
 />
  </View>


<View style={{flex: 1,marginTop: 20.5}}>
  <Text style={styles.textType}>ความคาดหวัง</Text>
   <TextInput placeholder="เขียนบันทึกความคาดหวัง"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onchangeText={ (wish) => this.setState({wish}) }
            style={styles.textContent}
 />
</View>



</View>
</View>
</View>

<View style={{flex: 1,marginTop: 135}}>
 <Image source={require('./assets/images/rain-doll.png')}
   style={{width: 91,height:95.71,marginLeft: 10}}
   resizeMode='contain' />  
 </View>
 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 30}}>
  <TouchableOpacity style={styles.button} activeOpacity ={0.75}
     onPress = {() => this.props.navigation.navigate('Mood')}
   >
       <Text style={styles.textButton}>ย้อนกลับ</Text>
  </TouchableOpacity>
 
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
       onPress ={() => this.props.navigation.navigate('CalendarHistory')}
     >
       <Text style={styles.textButton}>บันทึก</Text>
     </TouchableOpacity>
</View>


</View>
 
   
    </SafeAreaView>
 );
 }
}



const styles = StyleSheet.create({
textDate: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center', 
      marginLeft: -170
},

textEmoji: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',   
     marginTop: -20,
    marginLeft: 165
     
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
       marginBottom: 4,
       
        
},

   buttonFeel:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginTop: 90,
      marginLeft: 70,
      borderRadius: 10,
      shadowColor: '#87D6E8',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
    },

    textFeel: {
     color: '#000000',
     fontSize: 24,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 12,
    },

    page:{
      height: 394,
      width: 370,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.3,
      shadowRadius:3,
      elevation: 2,
      marginLeft: -25,
      marginTop: 465,
    },

    textContent:{
    color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',
     
    },

    spine:{
      height: 394,
      width: 40,
      backgroundColor: '#E79995',
      borderRadius: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.3,
      shadowRadius:3,
      elevation: 2,
      marginTop: -394,
      marginLeft: -25,
    },

    textType: {
     color: '#000000',
     fontSize: 13,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 43,
    },

    Type: {
      flex: 1,
      marginTop: -30,
    
    }
    


});

export default DiaryScreen;
