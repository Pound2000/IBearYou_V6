import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';
import {setCurrentDiaryID} from './actions/Diary'

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
                    user_name: [],
    };
  }
componentDidMount(){
  console.log("componentDidmount CalendarScreen this.props.userdata : ",this.props.userdata);
  this.loadCalendarScreen();
  this.loadUsername();
  //this.loadSelect_Diary();
}


loadCalendarScreen=async()=>{
   console.log("CalendarScreen");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-diary`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}


loadSelect_Diary=async()=>{
   console.log("loadSelect_Diary");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/select-diary`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
        //this.setState({"heal_sentenceData":res.data.data})
        //console.log("this.state.heal_sentenceData ",this.state.heal_sentenceData) 
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
          console.log("Fail")
        } 

}



 setCurrentDiaryID = async(diaryID)=>{
   await this.props.dispatch(setCurrentDiaryID(diaryID))
 }


 loadUsername=async()=>{
   console.log("list_username");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};;
    const endpoint = `${API_URL}/api/list-user_name`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"user_name":res.data.data})
          console.log("this.state.user_name",this.state.user_name)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}
 



  render() {
    const {userdata}= this.props

    const Feel_VeryGood = {key: 'Feel_VeryGood ', color: 'red', selectedDotColor: '#70BA97'};
    const Feel_Good = {key: 'Feel_Good', color: 'blue', selectedDotColor: 'blue'};
    const Feel_Indifferent = {key: 'Feel_Indifferent', color: 'green'};
    const Feel_Bad = {key: 'Feel_Bad', color: 'blue', selectedDotColor: 'blue'};
    const Feel_VeryBad = {key: 'Feel_VeryBad', color: 'green'};
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
            selectedDayTextColor: '#000000',
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
  /*
  markingType={'custom'}
    markedDates={{
    '2021-11-25': {selected: true, marked: true, selectedColor: '#CB6863'},
    '2021-11-17': {selected: true,marked: true,},
    '2021-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2021-11-19': {disabled: true, disableTouchEvent: true}

  }}
  */

    markingType={'multi-dot'}
  markedDates={{
    '2021-11-25': {dots: [Feel_VeryGood], selected: true, selectedColor: '#FFFFFF'},
    '2021-11-19': {disabled: true}
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
    {this.username()}  
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

 

  username() {
    return this.state.user_name.map((data) => {
      return (
         <View style={{flex: 1}}>
          <Text style={styles.textName}>ยินดีต้อนรับ {data.user_name}</Text>
          </View>
       )
    })

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

function username_Box (props){
  return <View style={{flex: 1}}>
          <Text style={styles.textName}>{props.userdata.user_name}!</Text>
          </View>
}

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect(mapStateToProps)(CalendarScreen);
