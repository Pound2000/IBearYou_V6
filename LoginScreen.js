import React, {Component,useState} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator,KeyboardAvoidingView
       , AsyncStorage} 
       from 'react-native';
import CustomHeader from './CustomHeader';




class LoginScreen extends Component {

   constructor(props) {
     super(props);
     this.state = { username : '',
                    password : ''
     };
   }
   handleChange = (e) =>
        {
          	this.setState({[e.target.name]: e.target.value })
          //  console.log(this.state.first_name)
        }
   logIn=()=>{
   console.log("this.state.username : ",this.state.username," this.state.password : ",this.state.password)
   console.dir(Card)
 
 }

  render() {
return (
 
        <SafeAreaView style={[styles.container, containerStyle]}>
     
           <View style={{flex: 1, alignItems : 'flex-start'}}>
 <CustomHeader title='Login'  navigation={this.props.navigation}/>
 </View>

      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/sea.png')}
    style={{width:390, height: 395, marginTop:-70}} />     
 </View>
    
<View style={{flex: 1}}> 
      <Image source={require('./assets/images/shell-1.png')}
   style={{width:45, height: 36.73, marginTop: 70,marginRight: 385}} />    
</View>
     <View style={{flex: 1}}> 
      <Image source={require('./assets/images/shell-2.png')}
   style={{width:45, height: 36.73, marginTop: 30,marginLeft:385}} />    
</View>
     

        <View style={styles.Input}>    


       

<TextInput
          placeholder="Username"
          placeholderTextColor="#707070"
          defaultValue={this.state.username}
          onChangeText={username=>this.setState({username})} 
          style = {styles.TextInputUsername}
          autoCapitalize='none'

           />
 
         <View style= {styles.image}>
         <Image source={require('./assets/images/People.png')}
              style ={{width: 19.61, height: 23 ,marginLeft:2,marginTop: 43}}/>

</View> 
 <TextInput
           placeholder="Password"
            placeholderTextColor="#707070"
            defaultValue={this.state.password}
            onChangeText={password=>this.setState({password})} 
           secureTextEntry={true}
           style = {styles.TextInputPassword}
            autoCapitalize='none'
           />

              <View style= {styles.image}>
         <Image source={require('./assets/images/Lock.png')}
              style ={{width: 19.61, height: 23 ,marginLeft:2,marginTop: 43}}/>
</View>
          
 </View>  

    
  

  <View style = {styles.forget}>  
           <Text style = {styles.textForget}>Forget Password ?</Text>  
  </View>
 

<View style = {styles.button}>
   <TouchableOpacity onPress={() => this.logIn()}>
       <View style = {styles.buttonLogin}>  
           <Text style = {styles.textLogin}>Login</Text>  
       </View>
   </TouchableOpacity>
 
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{width: 170, height: 1, backgroundColor: '#EA8681',marginTop: 12}} />
   <View>
     <Text style = {styles.textOr}> or </Text>
   </View>
   <View style={{width: 170, height: 1 ,backgroundColor: '#EA8681',marginTop: 12}} />   
</View>
 
 <TouchableOpacity  underlayColor='#FDF5F5' onPress={() => this.props.navigation.navigate('Register')}>
  <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Sign up</Text>  
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
        backgroundColor: '#EA8681',
        height: 35,
        width: 360,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 3,
      elevation: 5,
           
        
    },

      buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
       height: 35,
        width: 360,
        borderRadius: 5,
        marginTop: 14,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 2,
      elevation: 5,
        

    
    },

    textLogin: {
        color: '#FFFFFF',
        fontSize: 20,
    
    },

    textRegister: {
        color: '#E79995',
        fontSize: 20,
    },


    textOr: {
      color: '#EA8681',
      fontSize: 12,
      marginTop: 10,
    },

    textForget: {
      color:'#E79995',
      fontSize: 16,
      
    
    },

    forget: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingLeft: 227,
      marginTop: 3,
      marginBottom: 30,
      

    },

    TextInputUsername: {

      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#E79995',
      fontFamily: 'Philosopher',
      
    },

      TextInputPassword: {
      
      marginTop: 50,
      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#E79995',
      fontFamily: 'Philosopher',
      
    },

    Input: {
      marginBottom: 25,
      
    },

    image: {
      alignItems: 'flex-start',
      marginTop: -80 ,
      
      
    },

    keyboard: {
       fontSize: 20,
       color: 'black',
    },
   

    inputr:{
    height: 200,
    width : 300,
    margin: 30,
    borderWidth: 1,
    paddingLeft : 15,
    paddingBottom: 145,
    fontSize : 18,

    },

});

export default LoginScreen;
