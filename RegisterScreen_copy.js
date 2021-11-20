import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator}
       from 'react-native';
import CustomHeader from './CustomHeader';
import DatePicker from 'react-native-date-picker'
import axios from 'axios'; 
import {API_URL} from './config' 
import {sha256} from 'react-native-sha256' 
class RegisterScreen_copy extends Component {
  constructor(props) {
    super(props);
     this.state = {       first_name : '',
                          last_name : '',
                          date : '',
                          email : '',
                          user_name : '',
                          password : ''
     };
   }

     InputFirstname = () => {
     this.setState({
       first_name: !this.state.first_name
     })
      console.log ('selected seccess!')
  }

    InputLastname = () => {
     this.setState({
       last_name: !this.state.last_name
     })
      console.log ('selected seccess!')
  }

    InputDate= () => {
     this.setState({
       date: !this.state.date
     })
      console.log ('selected seccess!')
  }

   InputEmail= () => {
     this.setState({
       email: !this.state.email
     })
      console.log ('selected seccess!')
  }

  InputUsername = () => {
     this.setState({
       user_name: !this.state.user_name
     })
      console.log ('selected seccess!')
  }

InputPassword = () => {
     this.setState({
       password: !this.state.password
     })
      console.log ('selected seccess!')
  }

   handleSubmit = async(event) => {
    //event.preventDefault();
     console.log("handleSubmit")
     console.log("this.state.first_name  : ", this.state.first_name)
      this.setState ({
      first_name : this.state.first_name,
      last_name : this.state.last_name,
      date : this.state.date,
      email : this.state.email,
      user_name : this.state.user_name,
      password : this.state.password,
    
    }); 
    /*const pass256 = crypto
                    .createHmac('sha256',process.env.SHA256_SALT)
                    .update(String(this.state.password).trim())
                    .digest('hex') */
    /*  const pass256 =()=>{
        return new Promise((resolve,reject)=>{
          sha256(this.state.password+process.env.SHA256_SALT).then(hash=>{
            console.log('hash : ',hash)
            resolve(hash)
          })
        })
      }*/
     let pass256 =""
    /* await sha256('test').then(hash=>{
       pass256= hash
       console.log('hash : ',hash)
     }) */
    const userData ={}
    userData.first_name =this.state.first_name
    userData.last_name =this.state.last_name
    userData.user_name=this.state.user_name
    userData.email =this.state.email
    userData.birthday="2000-04-16"
    userData.password = String(this.state.password).trim() 

    axios.post(API_URL+'/api/register', userData)
      .then(res => { 
       // console.log(res.data);
        if(res.data.message==="Success"){
          console.log("Success")
         // this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="DuplicateEmailOrUserName") {
         // console.log("DuplicateEmailOrUserName")
        }
      })
  }

  

  render() {
  return (
      <SafeAreaView style={[styles.container, containerStyle]}>
     
           <View style={{flex: 1, alignItems : 'flex-start'}}>
 <CustomHeader title='Register_copy'  navigation={this.props.navigation}/>
 </View>

 <View style={{flex: 1}}> 

         <TextInput
          placeholder="Firstname"
          placeholderTextColor="#707070"
          defaultValue={this.state.first_name}
          onChangeText={first_name=>this.setState({first_name})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.InputFirstname}
           />

          <TextInput
          placeholder="Lastname"
          placeholderTextColor="#707070"
          defaultValue={this.state.last_name}
          onChangeText={last_name=>this.setState({last_name})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.InputLastname}

           />

          <TextInput
          placeholder="Date"
          placeholderTextColor="#707070"
          defaultValue={this.state.date}
          onChangeText={date=>this.setState({date})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.InputDate}
           />

          <TextInput
          placeholder="email"
          placeholderTextColor="#707070"
          defaultValue={this.state.email}
          onChangeText={email=>this.setState({email})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
           textContentType="emailAddress"
          value = {this.state.InputEmail}

           />

          <TextInput
          placeholder="Username"
          placeholderTextColor="#707070"
          defaultValue={this.state.user_name}
          onChangeText={user_name=>this.setState({user_name})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.InputUsername}

           />


           <TextInput
           placeholder="Password"
            placeholderTextColor="#707070"
            defaultValue={this.state.password}
            onChangeText={password=>this.setState({password})} 
           secureTextEntry={true}
           style = {styles.TextInputPassword}
            autoCapitalize='none'
            value = {this.state.InputPassword}
           />
</View>

    <View style = {styles.button}>
   <TouchableOpacity onPress={() =>  this.handleSubmit()}>
    <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Sign up</Text>  
       </View>  
   </TouchableOpacity >
 
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{width: 170, height: 1, backgroundColor: '#EA8681',marginTop: 12}} />
   <View>
     <Text style = {styles.textOr}> or </Text>
   </View>
   <View style={{width: 170, height: 1 ,backgroundColor: '#EA8681',marginTop: 12}} />   
</View>
 
 <TouchableOpacity    onPress={() => this.props.navigation.navigate('Login')}>
   <View style = {styles.buttonLogin}>  
           <Text style = {styles.textLogin}>Login</Text>  
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

    image: {
      alignItems: 'flex-start',
      marginTop: -77 ,
      paddingLeft: 40,
      
      
    },

     textName: {
      height: 40, 
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#E79995',
      fontFamily: 'Philosopher',
    },
    

    TextInputUsername: {
      padding: 10
    },
    

    TextInputPassword: {
      padding: 10
    }
   

   });

   


export default RegisterScreen_copy;
