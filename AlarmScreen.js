import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, Switch}
       from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import ToggleSwitch from 'toggle-switch-react-native';


import CustomHeader from './CustomHeader';


class AlarmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.edit = this.edit;
  }

  switchToggle = () => {
     this.setState({
       toggle: !this.state.toggle 
     })
      console.log ('selected switch!')
  }

  editAlarm = ()=> {
    this.edit({
      edit: !this.state.edit
    })
    console.log ('edit!')
  }


  render() {

const editAlarm = this.edit

    return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#EAD6A4' }}>
      <CustomHeader title='Alarm' isHome={true} navigation={this.props.navigation}/>

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
        <View style={styles.alarmList}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textAlarm}>การแจ้งเตือน</Text>
          <View style={{marginTop: 10,marginLeft: 185}}>
            <Switch
              trackColor={{false: '#FFFFFF', true: '#014A5C'}}
              thumbColor={this.state.toggle ? "#FFFFFF" : "#014A5C"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={(value) => this.setState({toggle: value})}
              value={this.state.toggle}
              style={{ transform: [{ scaleX: .7 }, { scaleY: .6 }] }}
            />
          </View>
      </View>

          <View style={{width: 310, height: 1, backgroundColor: '#000000',marginTop: 8,marginLeft: 20}}></View>
        
      <View style={{flexDirection: 'row',paddingLeft: 260,marginTop: 20}}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('setAlarm')}>
                  <View style={{flex: 1, alignItems: 'center'}}>  
                    <Image source={require('./assets/images/add.png')}
                            style={{width:19.41,height:19.41,marginLeft: 30}} />     
                  </View>
        </TouchableOpacity>

        <TouchableOpacity>
         <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/edit.png')}
              style={{width:20,height:20,marginLeft: 10}} />     
        </View>
        </TouchableOpacity>
      </View>

<View style={{flex: 1}}>
      <View style={styles.editButton}>
            <TouchableOpacity onPress={() => 'editAlarm'}>  
             <Text style={styles.textEdit}>แก้ไข</Text> 
             </TouchableOpacity>
      </View>
</View>
          <View style={{flex: 1,alignItems: 'center'}}>

         <View style={{flex: 1,marginTop: -40}}>
            <Text style={styles.textAlarmList}>ไม่มีรายการแจ้งเตือน</Text>
          </View>



               <View style={{flex: 1,marginTop: -220,marginBottom: -280}}> 
                <View style={{flex: 1}}>
                  <View style={styles.alarmBox}>

                      <View style={{flex: 1, alignItems: 'center',marginLeft: -220,marginTop: 20}}>  
                        <Image source={require('./assets/images/day.png')}
                                style={{width:35,height:35}} />     
                      </View>

                  <View style={{flex: 1,marginTop: -75,marginLeft: 60}}>
                    <Text style={styles.textTime}>07:25</Text>
                    <Text style={styles.textDay}>ทุกวัน</Text>
                  </View>
                  </View>

                  
                    <View style={{marginTop: -55,marginLeft: 255}}>
                      <Switch
                        trackColor={{false: '#FFFFFF', true: '#014A5C'}}
                        thumbColor={this.state.toggle ? "#FFFFFF" : "#014A5C"}
                        ios_backgroundColor="#FFFFFF"
                        onValueChange={(value) => this.setState({toggle: value})}
                        value={this.state.toggle}
                        style={{ transform: [{ scaleX: .7 }, { scaleY: .6 }] }}
                        />
                    </View>
                </View>
              </View>

                             <View style={{flex: 1,marginTop: 10}}> 
                <View style={{flex: 1}}>
                  <View style={styles.alarmBox}>

                      <View style={{flex: 1, alignItems: 'center',marginLeft: -220,marginTop: 20}}>  
                        <Image source={require('./assets/images/night.png')}
                                style={{width:35,height:35}} />     
                      </View>

                  <View style={{flex: 1,marginTop: -75,marginLeft: 60}}>
                    <Text style={styles.textTime}>07:25</Text>
                    <Text style={styles.textDay}>ทุกวัน</Text>
                  </View>
                  </View>

                  
                    <View style={{marginTop: -55,marginLeft: 255}}>
                      <Switch
                        trackColor={{false: '#FFFFFF', true: '#014A5C'}}
                        thumbColor={this.state.toggle ? "#FFFFFF" : "#014A5C"}
                        ios_backgroundColor="#FFFFFF"
                        onValueChange={(value) => this.setState({toggle: value})}
                        value={this.state.toggle}
                        style={{ transform: [{ scaleX: .7 }, { scaleY: .6 }] }}
                        />
                    </View>
                </View>
              </View>

              

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

  textAlarm: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    paddingLeft: 20 ,
    paddingTop: 20,

  },

  alarmList: {
    height: 562,
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    marginTop: -105,
  },
  
  textAlarmList: {
    color: '#014A5C',
    fontFamily: 'Quark',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  editButton: {
    height: 50,
    width: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    justifyContent: 'center',
    marginLeft: 245,
    //marginTop: 25,
  },

  textEdit: {
    color: "#000000",
    fontFamily: 'Quark',
    fontSize: 19,
    //textAlign: 'center', 
    paddingLeft: 20,  
  },

  alarmBox: {
    height: 80,
    width: 320,
    backgroundColor: '#FFFFFF',
    borderColor: '#70BA97',
    borderLeftWidth: 35,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderTopWidth: 5,
  },

  textTime: {
    color: '#000000',
    fontFamily: 'Quark',
    fontSize: 26,
    fontWeight: 'bold',
  },

  textDay: {
    color: '#000000',
    fontFamily: 'Quark',
    fontSize: 14,
    flex: 1,
  }




});

export default AlarmScreen;
