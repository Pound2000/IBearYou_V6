import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       ,TextInput,KeyboardAvoidingView}
       from 'react-native';
import CustomHeader from './CustomHeader';


class HomeScreen extends Component {
  constructor() {
    super();
    {
      super()
      this.state={
        data: ''
      }
      console.warn('constructor')
    };
  }

componentDidMount(){
  console.warn('componentDidMount')
}

componentDidUpdate(){
  console.warn('componentDidUpdate')
}


  render() {
    return (

  
    <SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
       <CustomHeader title='Home' isHome={true} navigation={this.props.navigation}/>
   <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}>
   <View style = {styles.graph}></View>

<TouchableOpacity  activeOpacity={0.75}   
onPress={() => this.props.navigation.navigate('goodStory')}>
  <View style = {styles.buttonGood}>  
           <Text style = {styles.textType}>เรี่องราวที่ดี</Text>  
  </View>
  </TouchableOpacity >

  <TouchableOpacity   activeOpacity={0.75} 
  onPress={() => this.props.navigation.navigate('badStory')} >
  <View style = {styles.buttonBad}>  
           <Text style = {styles.textType}>เรื่องราวที่ไม่ดี</Text>  
  </View>
  </TouchableOpacity>

  <TouchableOpacity  activeOpacity={0.75} 
  onPress={() => this.props.navigation.navigate('wish')}>
  <View style = {styles.buttonWish}>  
           <Text style = {styles.textType}>ความคาดหวัง</Text>  
  </View>
  </TouchableOpacity>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shell-2.png')}
    style={{width:35 ,height:29,marginTop:-78,marginLeft:375}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/crab.png')}
    style={{width:43 ,height:25,marginTop:-185,marginRight:380}} />     
 </View>

    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shoe.png')}
    style={{width:22.33,height:22.99,marginTop:-10,marginLeft:-120}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/bear-sun.png')}
    style={{width:113.89,height:106.56,marginTop:-67,marginRight:250}} />     
 </View>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/umbrella-red.png')}
    style={{width:127 ,height:125.35,marginTop: -110,marginRight: -260}} />     
 </View>

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Polygon.png')}
    style={{width:436 ,height:109,marginTop: -70,marginRight: 10}} />     
 </View>
      </View>
  
    </SafeAreaView>


    );
  }
}


const TextInputStyle = {
paddingLeft: 40,
marginTop: 40,


}
const styles = StyleSheet.create({

      TextInput: {
      margin: 0,
      height: 40,
      width: 360,
      padding: 0,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      
    },

    Input: {
      marginBottom: 20,
    },

    keyboard: {
       fontSize: 20,
       color: 'red',
    },

    graph: {
      width: 354,
      height: 245,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#0D2367',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 25,
      marginTop: 20,
    },
   
    buttonGood:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#61A768',
      borderLeftWidth: 42,
      shadowColor: '#61A768',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 30,
    },

      buttonBad:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#FF4135',
      borderLeftWidth: 42,
      shadowColor: '#FF4135',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,  
      marginBottom: 30,
    },

      buttonWish:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#FF9E45',
      borderLeftWidth: 42,
      shadowColor: '#FF9E45',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,  
    },

    textType: {
      fontSize: 20,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 11,
    }


});


export default HomeScreen;
