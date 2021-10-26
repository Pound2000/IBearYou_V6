import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';


class setAlarmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  
  return (
     <SafeAreaView style={{ flex: 1 , backgroundColor: '#EAD6A4'}}>
      <CustomHeader title='setAlarm'  navigation={this.props.navigation}/>

    <View style={{flex: 1,alignItems: 'center',paddingTop: 30,}}>

       <View style={styles.Heal_box}> 
        <Text style={styles.Heal_title}>ประโยคพิเศษประจำวันจากน้องหมี</Text>
          <Text style={styles.Heal_sentence}>Lorem Ipsum is simply dummy text of the printing. Loremm is simply dummy text of the printing.</Text>
        </View> 

        <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Heal-bearNight.png')}
    style={{width:390,height:175,marginTop: -150}} />     
        </View>

    </View>


<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.setAlarm}>
          <Text style={styles.textAlarm}>ตั้งค่าการแจ้งเตือน</Text>
          <View style={{width: 310, height: 1, backgroundColor: '#FFFFFF',marginTop: 8,marginLeft: 20}}></View>
       <View style={styles.setting}>
        </View>
      </View>
    

  <View style={{flex:1,flexDirection: 'row',marginTop: 10,paddingTop: 5}}>
      <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alarm')} activeOpacity={0.75} >  
             <Text style={styles.textCancel}>ยกเลิก</Text> 
             </TouchableOpacity>
      </View>

      <View style={styles.saveButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alarm')} activeOpacity={0.75} >  
             <Text style={styles.textSave}>บันทึก</Text> 
             </TouchableOpacity>
      </View>
  </View>
</View>
     </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({


Heal_box: {
    height: 133,
    width: 350,
    backgroundColor: '#014A5C',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    justifyContent: 'center',
  },
  
  Heal_title: {
    color: '#FFFFFF',
    fontFamily: 'Quark',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 80,
  },

  Heal_sentence: {
    color: '#FFFFFF',
    fontFamily: 'Quark',
    fontSize: 15,
    flexWrap: 'wrap',
    paddingLeft: 60,
    paddingRight: 60,
    marginLeft: 20,
  },

  setAlarm: {
    height: 460,
    width: 350,
    backgroundColor: '#014A5C',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    marginTop: -185,
  },

  cancelButton: {

  },

  saveButton: {

  },

  textSave: {
    color: '#014A5C',
    fontFamily: 'Quark',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 130
  },

  textCancel:{
    color: '#014A5C',
    fontFamily: 'Quark',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  setting:{
    height: 280,
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 130,
  },

    textAlarm: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    paddingLeft: 20 ,
    paddingTop: 20,

  },

}
);


export default setAlarmScreen;
