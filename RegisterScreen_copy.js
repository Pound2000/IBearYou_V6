import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator}
       from 'react-native';
import CustomHeader from './CustomHeader';
import DatePicker from 'react-native-date-picker'
import axios from 'axios';


class RegisterScreen_copy extends Component {
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

     InputFirstname = () => {
     this.setState({
       firstname: !this.state.firstname
     })
      console.log ('selected seccess!')
  }

       InputLastname = () => {
     this.setState({
       lastname: !this.state.lastname
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
       username: !this.state.username
     })
      console.log ('selected seccess!')
  }

InputPassword = () => {
     this.setState({
       password: !this.state.password
     })
      console.log ('selected seccess!')
  }



onSubmit = (e) => {
        e.preventDefault()

        const userObject = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            date: this.state.date,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        axios.post('localhost:3000/api/register', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ firstname : '',lastname : '',date : '',email : '',username : '',password : '' })
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
          defaultValue={this.state.firstname}
          onChangeText={firstname=>this.setState({firstname})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.firstname}
           />

          <TextInput
          placeholder="Lastname"
          placeholderTextColor="#707070"
          defaultValue={this.state.lastname}
          onChangeText={lastname=>this.setState({lastname})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.lastname}

           />

          <TextInput
          placeholder="Date"
          placeholderTextColor="#707070"
          defaultValue={this.state.date}
          onChangeText={date=>this.setState({date})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.date}
           />

          <TextInput
          placeholder="email"
          placeholderTextColor="#707070"
          defaultValue={this.state.email}
          onChangeText={email=>this.setState({email})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
           textContentType="emailAddress"


           />

          <TextInput
          placeholder="Username"
          placeholderTextColor="#707070"
          defaultValue={this.state.username}
          onChangeText={username=>this.setState({username})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'
          value = {this.state.username}

           />


           <TextInput
           placeholder="Password"
            placeholderTextColor="#707070"
            defaultValue={this.state.password}
            onChangeText={password=>this.setState({password})} 
           secureTextEntry={true}
           style = {styles.TextInputPassword}
            autoCapitalize='none'
            value = {this.state.password}
           />
</View>

    <View style = {styles.button}>
   <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeApp')}>
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
    

    TextInputUsername: {
      padding: 10
    },
    

    TextInputPassword: {
      padding: 10
    }
   

   });

   


export default RegisterScreen_copy;
