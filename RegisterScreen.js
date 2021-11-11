import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator}
       from 'react-native';
import CustomHeader from './CustomHeader';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  return (
      <SafeAreaView style={[styles.container, containerStyle]}>
     

<View style={{flex: 1, alignItems: 'center'}}>
<Image source={require('./assets/images/snow-3.png')} 
style={{width:390, height: 240, marginTop: -94}}
/>
</View>


         
<View style={{ flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'
,marginLeft: 102,marginBottom: -50}}>

<TextInput
           placeholder="Firstname"
           placeholderTextColor="#707070"
           style={styles.textName}
           autoCapitalize='none'
           />

         <View style= {styles.image}>
      
<View style={{flex: 1,marginTop: 100}}>

         <Image source={require('./assets/images/Name.png')}
              style ={{width: 20, height: 25,marginTop: 22,marginLeft: -250}}/>
</View>
</View>
<TextInput
           placeholder="Lastname"
           placeholderTextColor="#707070"
             style={styles.textName}
           autoCapitalize='none'
           />

</View>

<TextInput
           placeholder="Date"
           placeholderTextColor="#707070"
           style = {[styles.TextInput,TextInputStyle]}
           autoCapitalize='none'
           />

         <View style= {styles.image}>
         <Image source={require('./assets/images/Date.png')}
              style ={{width: 24, height: 20 ,marginTop: 8,marginRight: 375}}/>
</View>
<View style={styles.Input}>    
<TextInput
           placeholder="Email"
           placeholderTextColor="#707070"
           style = {[styles.TextInput,TextInputStyle]}
           autoCapitalize='none'
           />

         <View style= {styles.image}>
         <Image source={require('./assets/images/email.png')}
              style ={{width: 34, height: 21 ,marginLeft:-5, marginTop: 3}}/>
</View>

<TextInput
           placeholder="Username"
           placeholderTextColor="#707070"
           style = {[styles.TextInput,TextInputStyle]}
           autoCapitalize='none'
           />

         <View style= {styles.image}>
         <Image source={require('./assets/images/People.png')}
              style ={{width: 19.61, height: 23 ,marginLeft:2}}/>
</View>

 <TextInput
           placeholder="Password"
             placeholderTextColor="#707070"
           secureTextEntry={true}
           style = {[styles.TextInput,TextInputStyle]}
           autoCapitalize='none'
           />

              <View style= {styles.image}>
         <Image source={require('./assets/images/Lock.png')}
              style ={{width: 19.61, height: 23 ,marginLeft:2}}/>
</View>
           
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
   

   });

   


export default RegisterScreen;
