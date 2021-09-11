import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       , TextInput}
       from 'react-native';

import CustomHeader from './CustomHeader';

class CalendarHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
<SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
     <CustomHeader title='CalendarHistory'  navigation={this.props.navigation}/>
     <View style={{flex: 1}}>
        <Text>CalendarHistory</Text>
     </View>

 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>




<View style={{marginTop: -70}}></View>

<TouchableOpacity activeOpacity={0.75}  
  onPress ={() => this.props.navigation.navigate('DiaryHistory')}>

<View >


<View style={{flex: 1}}>

  <View style={styles.page}></View>

  <View style={styles.spine}></View>

</View>


<View style={{marginTop: -30}}>
 <View style={{flex: 1}} >
 <Image source={require('./assets/images/line.png')}
   style={{width: 290,height:256,marginTop: -232,marginLeft: 35}}
   resizeMode='contain' />  
 </View>

<View style={{marginTop: -450}}>
 <View>
<Text style={styles.textDate}>10 กันยายน 2564</Text>
 </View>
<View style={styles.buttonEmoji}>
<TouchableOpacity activeOpacity={0.75} disabled={true} >
     <Text style={styles.textEmoji}>เลือกอิโมจิในวันนี้ของเธอ</Text>
      <Image source={require('./assets/images/pencil.png')}
   style={{width: 10.32,height:10.32,marginTop: -15,marginLeft:310}}
   resizeMode='contain'
  
    />
  </TouchableOpacity>
  </View>
</View>


<View style={{flex: 1,marginTop: -420}}>

<View style={{flex: 1,marginTop: -11}}>
  <Text style={styles.textType}>เรื่องราวที่ดี</Text>
   <TextInput placeholder="เขียนบันทึกเรื่องราวที่ดี"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onchangeText={ (good) => this.setState({good}) }
            style={styles.textContent}
             editable={false}
 />
 </View>


 <View style={{flex: 1,marginTop: 18.5}}>
  <Text style={styles.textType}>เรื่องราวที่ไม่ดี</Text>
   <TextInput placeholder="เขียนบันทึกเรื่องราวที่ไม่ดี"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onchangeText={ (bad) => this.setState({bad}) }
            style={styles.textContent}
             editable={false}
 />
  </View>


<View style={{flex: 1,marginTop: 20.5}}>
  <Text style={styles.textType}>ความคาดหวัง</Text>
   <TextInput placeholder="เขียนบันทึกความคาดหวัง"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onchangeText={ (wish) => this.setState({wish}) }
            style={styles.textContent}
             editable={false}
 />
</View>



</View>
</View>
</View>

</TouchableOpacity> 

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
     marginLeft: -165,
},

textEmoji: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',   
     marginTop: -20,
     marginLeft: 165,
     
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
       margin: 30,
       marginBottom: 4,
       
        
},

   buttonFeel:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginTop: 90,
      marginLeft: 5,
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
      marginTop: 85,
    },

    textContent:{
    color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',
     marginTop: 10,
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
      marginLeft: -24,
    },

    textType: {
     color: '#000000',
     fontSize: 13,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 45,
    },

    Type: {
      flex: 1,
      marginTop: -30,
    
    },

 
    


});

export default CalendarHistoryScreen;
