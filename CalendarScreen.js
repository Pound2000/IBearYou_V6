import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';
import {Calendar, LocaleConfig} from 'react-native-calendars';
  /*LocaleConfig.locales['ts'] = {
    monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
    monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
    dayNames: ['จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์','อาทิตย์'],
    dayNamesShort: ['จ.','อ.','พ.','พฤ.','ศ.','ส.','อา.']
  }
  LocaleConfig.defaultLocale = 'tr';*/

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
   return (
     <SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
     <CustomHeader title='Calendar' isHome={true} navigation={this.props.navigation}/>

<View>
  <Calendar
    theme={{calendarBackground: '#E79995',
            dayTextColor: '#000000',
            monthTextColor: '#000000',
            selectedDayBackgroudColor: '#CB6863',
            selectedDayTextColor: '#FFFFFF',
    }}
  style={styles.calendar}/>



</View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <View style={{marginTop:20}}>
      <Text style={styles.textName}>Hi Riboots !</Text>
      <View style={styles.boxContent}>
      <Text style={styles.content}>ในหนึ่งวันต้องพบเจอเรื่องราวมากมาย หลากหลายความรู้สึก สมุดเล่มนี้จะเก็บบันทึกเรื่องราวต่าง ๆ 
      ความรู้สึกที่อยากบันทึกไว้ หรือจะเขียนตั้งเป้าหมายก้ได้ ถ้าพร้อมแล้วไปเขียนบันทึกในแบบฉบับของตัวเองกันเลย</Text>
      </View>

 <View style = {styles.button}>
          <TouchableOpacity
        style={{marginTop: 120}}
        onPress={() => this.props.navigation.navigate('Mood')  }
       activeOpacity={0.75} >
        <View style = {styles.buttonStart}>
        <Text style = {styles.textStart}> Let's Get Started </Text>
        </View>
      </TouchableOpacity>
    </View>

      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/boots.png')}
    style={{width:50.91,height:41.96,marginTop:-45,marginRight:-320}} />     
 </View>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/umbrella-blue.png')}
    style={{width:135.42 ,height:111,marginTop: -290,marginRight: -180}} />     
 </View>

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/raincoat.png')}
    style={{width:98.08 ,height:107.17,marginTop: -140,marginLeft: -280}} />     
 </View>
     </View>
    </View>
     </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    content: {
     
      fontSize: 18,
      fontFamily: 'Quark',
      textAlign: 'center',
      marginTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
    },

    boxContent:{
      width: 318,
      height: 170,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginTop: 95,
    },

       button: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       shadowColor: "black",
       shadowOffset: { width: 0, height: 4 },
       shadowRadius: 3,
       shadowOpacity: 0.25,
       elevation: 3,
      
       
   },
 
   buttonStart: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 278,
       marginTop: -30,
       overflow: "hidden",
      
      
   },
 
   textStart: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
   },

   textName: {
    color: '#000000',
     fontSize: 36,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginBottom: -90,
     marginLeft: -20
   },

    calendar: {
      //borderBottomRightRadius: 25,
      //borderBottomLeftRadius: 25,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 3,
      shadowOpacity: 0.4,
      elevation: 3,
      
    }

  });
export default CalendarScreen;
