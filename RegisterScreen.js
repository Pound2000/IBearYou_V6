import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button, Modal
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator}
       from 'react-native';
import CustomHeader from './CustomHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {       firstname : '',
                          lastname : '',
                          date : '',
                          email : '',
                          username : '',
                          password : ''
     };
  }

  setDate= () => {
     this.setState({
       show : !this.state.date
     })
      console.log ('selected seccess!')
  }

  selectedDate = () => {
    setDate(selectedDate);
  }

  render() {
  return (
      <SafeAreaView style={[styles.container, containerStyle]}>
     
<View style={{flex: 1, alignItems : 'flex-start'}}>
 <CustomHeader title='Register_copy'  navigation={this.props.navigation}/>
 </View>

<View style={{flex: 1, alignItems: 'center'}}>
<Image source={require('./assets/images/snow-3.png')} 
style={{width:390, height: 240, marginTop: -170}}
/>
</View>

<View style={{flex:1,marginLeft: -20}}>
      <View style={{ flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginBottom: 20}}>
          { !this.state.firstname ?
          <View style={{marginLeft: 10}}>
          <View>
            <Image source={require('./assets/images/Name.png')}
              style ={{width: 20, height: 25,marginTop: 0,marginBottom: -30,marginLeft:10}}/>
          </View>

            <TextInput
              placeholder="ชื่อจริง"
              placeholderTextColor="#707070"
              defaultValue={this.state.firstname}
              onChangeText={firstname=>this.setState({firstname})} 
              style = {styles.TextInputName_true}
              autoCapitalize='none'
              value = {this.state.InputFirstname}
              />
            </View>
            :
            <View style={{marginLeft: 10}}>
           <View>
            <Image source={require('./assets/images/Name-pink.png')}
              style ={{width: 20, height: 25,marginTop: 0,marginBottom: -30,marginLeft:10}}/>
          </View>

            <TextInput
              placeholder="ชื่อจริง"
              placeholderTextColor="#707070"
              defaultValue={this.state.firstname}
              onChangeText={firstname=>this.setState({firstname})} 
              style = {styles.TextInputName_fault}
              autoCapitalize='none'
              value = {this.state.InputFirstname}
              />
              </View>
  }

  {  !this.state.lastname ?      
          <View style={{marginLeft: 10}}>
            <TextInput
              placeholder="นามสกุล"
              placeholderTextColor="#707070"
              defaultValue={this.state.lastname}
              onChangeText={lastname=>this.setState({lastname})} 
              style = {styles.TextInputLastname_true}
              autoCapitalize='none'
              value = {this.state.InputLastname}
              />
           </View> 
           :
            <View style={{marginLeft: 10}}>
            <TextInput
              placeholder="นามสกุล"
              placeholderTextColor="#707070"
              defaultValue={this.state.lastname}
              onChangeText={lastname=>this.setState({lastname})} 
              style = {styles.TextInputLastname_fault}
              autoCapitalize='none'
              value = {this.state.InputLastname}
              />
           </View> 
       
  }
         </View>
</View>

<View style={{flex:1}}>

      <TouchableOpacity onPress={() => console.log('selected date')}>
         
         <View>
            <Image source={require('./assets/images/Date.png')}
              style ={{width: 30, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

            <View style = {styles.TextInput_true}>  
            <Text style = {styles.textDate}>วันเกิด</Text> 
                <Text>{moment().format('YYYY-MM-DD')}</Text> 
            </View>
            
                <Modal
                  transparent={true}
                  animationType='slide'
                  visible={this.state.setDate}
                  supportedOrientations={['portrait']}
                  onRequestClose={() => setDate(false)}>
                <View style={{flex:1}}>
                  <TouchableHighlight onPress={() => setDate(false)} visible={this.state.setDate}
                    style={{flex:1,flexDirection: 'row',alignItems:'flex-end',}}>
                      <TouchableHighlight onPress={() => console.log('datepicker clicked')} 
                      underlayColor={'#FFFFFF'} 
                      style={{flex:1,borderTopColor: '#E9E9E9',borderTopWidth: 1}}>
                        <View style={{backgroundColor:'#FFFFFF',height: 256, overflow: 'hidden'}}>
                            <View style={{marginTop: 20}}>
                              <DateTimePicker
                                timeZoneOffsetMinutes={0}
                                value={new Date(this.state.date)}
                                mode='date'
                                minimumDate={new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))}
                                //maximumDate={selectedDate()}
                              />
                            </View>
                        </View>
                      </TouchableHighlight>
                  </TouchableHighlight>
                </View>
               </Modal>
   </TouchableOpacity>
</View>

<View style={{flex:1}}>
{ !this.state.email ?
          <View>
           <View>
            <Image source={require('./assets/images/email.png')}
              style ={{width: 30, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

          
            <TextInput
              placeholder="อีเมล"
              placeholderTextColor="#707070"
              defaultValue={this.state.email}
              onChangeText={email=>this.setState({email})} 
              style = {styles.TextInput_true}
              autoCapitalize='none'
              value = {this.state.InputEmail}
              />
            
            </View>
              :
              <View>
            <View>
            <Image source={require('./assets/images/email-pink.png')}
              style ={{width: 30, height: 23,marginTop: -6,marginBottom: -30}}/>
            </View>

            
            <TextInput
              placeholder="อีเมล"
              placeholderTextColor="#707070"
              defaultValue={this.state.email}
              onChangeText={email=>this.setState({email})} 
              style = {styles.TextInput_fault}
              autoCapitalize='none'
              value = {this.state.InputEmail}
              />
              
              </View>
  }
</View> 

<View style={{flex:1}}>
{ !this.state.username ?
          <View>
           <View>
            <Image source={require('./assets/images/People.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

          
            <TextInput
              placeholder="ชื่อผู้ใช้งาน"
              placeholderTextColor="#707070"
              defaultValue={this.state.username}
              onChangeText={username=>this.setState({username})} 
              style = {styles.TextInput_true}
              autoCapitalize='none'
              value = {this.state.InputEmail}
              />
            
            </View>
              :
              <View>
            <View>
            <Image source={require('./assets/images/People-pink.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
            </View>

            
            <TextInput
              placeholder="ชื่อผู้ใช้งาน"
              placeholderTextColor="#707070"
              defaultValue={this.state.username}
              onChangeText={username=>this.setState({username})} 
              style = {styles.TextInput_fault}
              autoCapitalize='none'
              value = {this.state.InputEmail}
              />
              
              </View>
  }
</View> 

<View style={{flex:1}}>
{ !this.state.password ?
          <View>
           <View>
            <Image source={require('./assets/images/Lock.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

          
          <TextInput
         placeholder="รหัสผ่าน"
          placeholderTextColor="#707070"
          defaultValue={this.state.password}
          onChangeText={password=>this.setState({password})}
         secureTextEntry={true}
         style = {styles.TextInput_true}
          autoCapitalize='none'
         />
            
            </View>
              :
              <View>
            <View>
            <Image source={require('./assets/images/Lock-pink.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
            </View>
            
        <TextInput
         placeholder="รหัสผ่าน"
          placeholderTextColor="#707070"
          defaultValue={this.state.password}
          onChangeText={password=>this.setState({password})}
         secureTextEntry={true}
         style = {styles.TextInput_fault}
          autoCapitalize='none'
         />
              
              </View>
  }
</View> 



    <View style={{ flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginBottom: 20}}>
      
       <View style={ styles.bullet }>
            <Text style={{marginRight: 5}}>{'\u2022'}</Text>
        </View>
      <Text style={{fontSize: 12}}>Contain at least 6 letter</Text>
      <Text style={{fontSize: 12,marginLeft: 72}}>Contain at least 1 number</Text>
    </View>

    <View style = {styles.button}>
   <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeApp')}>
    <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>สร้างบัญชีผู้ใช้งาน</Text>  
       </View>  
   </TouchableOpacity >
 
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{width: 170, height: 1, backgroundColor: '#EA8681',marginTop: 12}} />
   <View>
     <Text style = {styles.textOr}> หรือ </Text>
   </View>
   <View style={{width: 170, height: 1 ,backgroundColor: '#EA8681',marginTop: 12}} />   
</View>
 
 <TouchableOpacity    onPress={() => this.props.navigation.navigate('Login')}>
   <View style = {styles.buttonLogin}>  
           <Text style = {styles.textLogin}>เข้าสู่ระบบ</Text>  
       </View>
   </TouchableOpacity>
   </View>
     </SafeAreaView>
  );
  }
}



const containerStyle = {

        flex: 1 ,
        flexDirection: 'column' ,  
}

const TextInputStyle = {
paddingLeft: 40,
marginTop: 40,


}


const styles = StyleSheet.create({
    
   container: {   
       backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        height: '100%',
        
          
   },
    button: {
        marginBottom: 20,
        alignItems: 'center',
        
         
    },

    buttonLogin: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
         backgroundColor: '#FFFFFF',
        height: 35,
        width: 360,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 2,
      elevation: 5,
      marginTop: 14,
           
        
    },

      buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
      
         backgroundColor: '#EA8681',
       height: 35,
        width: 360,
        borderRadius: 5,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 3,
      elevation: 5,
        

    
    },

    textLogin: {
        color: '#E79995',
        fontSize: 20,
    
    },

    textRegister: {
        color: '#FFFFFF',
        fontSize: 20,
    },


    textOr: {
      color: '#EA8681',
      fontSize: 12,
      marginTop: 10,
    },

 TextInput: {
      margin: 40,
      height:20,
      width: 360,
      padding: 18,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
  
    },

    Input: {
      marginBottom: 20,
    },


    TextInputName_true: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#707070',
      fontFamily: 'Philosopher',
      margin:10,
      marginTop: 0,
      
    },

      TextInputName_fault: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      margin:10,
      marginTop: 0,
      
    },

      TextInputLastname_true: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#707070',
      fontFamily: 'Philosopher',
      marginTop: -10,
    },

      TextInputLastname_fault: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      marginTop: -10
    },

      TextInput_true: {
      height: 40, 
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#707070',
      fontFamily: 'Philosopher',
      marginTop: -10
    },
   
     TextInput_fault: {
      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      marginTop: -10,
      
    },
   
      textName: {
      margin: 40,
      height:20,
      width: 171,
      padding: 18,
      paddingLeft: 42,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      marginLeft: -65,
      
      
      
    },

    
   

   });

   


export default RegisterScreen;
