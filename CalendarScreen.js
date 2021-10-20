import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';
import {Calendar, LocaleConfig} from 'react-native-calendars';
  /*LocaleConfig.locales['th'] = {
    monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
    monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
    dayNames: ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],
    dayNamesShort: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.']
  }
  LocaleConfig.defaultLocale = 'th';*/

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
            dayTextColor: '#000000', textDayFontFamily: 'Quark', textDayFontSize: 16,
            todayTextColor: '#FFFFFF',
            monthTextColor: '#000000', textMonthFontSize: 18,textMonthFontFamily: 'Quark',
            selectedDayBackgroudColor: '#CB6863', arrowColor: '#000000',
            selectedDayTextColor: '#FFFFFF',
            textSectionTitleColor: '#000000',  textDayHeaderFontWeight: 'bold', textDayHeaderFontFamily: 'Quark', textDayHeaderFontSize: 16,
            textDisabledColor: '#FFFFFF',
            'stylesheet.calendar.header': {
    week: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
    }}

/*dayComponent={({date, state}) => {
    return (
      <View>
        <Text style={{textAlign: 'center', color: state === 'disabled' ? '#FFFFFF' : '#000000'}}>
          {date.day}
        </Text>
      </View>
    );
  }}*/

  style={styles.calendar}
  
  markingType={'custom'}
    markedDates={{
    '2021-10-20': {selected: true, marked: true, selectedColor: '#CB6863'},
    '2021-10-17': {selected: true,marked: true,},
    '2021-10-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2021-10-19': {disabled: true, disableTouchEvent: true}

  }}

   /*markedDates={{
    '2021-10-20': {
      customStyles: {
        container: {
          backgroundColor: 'green'
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    },
    '2021-10-18': {
      customStyles: {
        container: {
          backgroundColor: 'white',
          elevation: 2
        },
        text: {
          color: 'blue'
        }
      }
    }
  }}*/

  
  />




</View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <View style={{marginTop:95}}>
      <Text style={styles.textName}>Hi Riboots !</Text>
      <View style={styles.boxContent}>
      <Text style={styles.content}>ในหนึ่งวันต้องพบเจอเรื่องราวมากมาย หลากหลายความรู้สึก สมุดเล่มนี้จะเก็บบันทึกเรื่องราวต่าง ๆ 
      ความรู้สึกที่อยากบันทึกไว้ หรือจะเขียนตั้งเป้าหมายก้ได้ ถ้าพร้อมแล้วไปเขียนบันทึกในแบบฉบับของตัวเองกันเลย</Text>
      </View>



      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/boots.png')}
    style={{width:50.91,height:41.96,marginTop:-20,marginRight:-320}} />     
 </View>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/umbrella-blue.png')}
    style={{width:135.42 ,height:111,marginTop: -235,marginRight: -180}} />     
 </View>

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/raincoat.png')}
    style={{width:98.08 ,height:107.17,marginTop: -75,marginLeft: -280}} />     
 </View>
     </View>
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

     </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    content: {
     
      fontSize: 18,
      fontFamily: 'Quark',
      textAlign: 'center',
      marginTop: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },

    boxContent:{
      width: 318,
      height: 160,
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
       marginTop: -45,
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
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 3,
      shadowOpacity: 0.4,
      elevation: 3,
      paddingLeft: 25,
      paddingRight: 25,
    }

  });
export default CalendarScreen;
