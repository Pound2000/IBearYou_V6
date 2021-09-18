import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import CustomHeader from './CustomHeader';


const switchOption = [
  {label: 'Check-up', value: 'Check-up'},
  {label: 'History', value: 'History'},
];


class HistoryScreen extends Component {
constructor(props) {
   super(props)
   this.state = {
     title:'',
     checkupSwitch:'',
   };
  }

  setSwitch(checkupSwitch) {
      this.setState({checkupSwitch:checkupSwitch});
    }

  
  render() {
    return (
       <SafeAreaView style={[styles.container, containerStyle]}> 
 

<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bg-Blue.png')}
    style={{width:568 ,height: 580,marginTop:100,marginRight: 40}} />     
 </View>


          <View style={{flex: 1, alignItems : 'flex-start',marginTop: -420}}>
 <CustomHeader title='History'  navigation={this.props.navigation}/>
 </View>

 



 <SwitchSelector
      options={switchOption}
      initial={0}
      onPress={() => this.props.navigation.navigate('Checkup')}
      textColor='#565656' 
      fontSize={16}
      selectedColor='#FFFFFF'
      buttonColor='#FE8150'
      backgroundColor='#FFE0D4'
      height = {37}

      style={{
      shadowColor: '#000000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity:  0.20,
      shadowRadius:3,
      elevation: 2,
      width: 290,
      marginTop: -320
   
}}
    />

     <View style={{flexDirection: 'row', alignItems: 'center',height: 91 ,width: 201
    , backgroundColor: 'white',borderRadius: 10,marginTop: 20, borderWidth: 2.5
    , borderColor : '#E79995' ,shadowColor: '#000000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
      }}>
 <View style={{alignItems: 'center',paddingLeft: 30,paddingRight: 30}}>
<Text style={{ color: '#E79995',fontSize: 30,fontWeight: "bold",marginLeft: 17}}>History</Text>
     </View>
    </View>

    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Frame.png')}
    style={styles.image} />     
 </View>

 <View style={{flex:1, marginTop: -370,marginLeft: -40}}> 
 <Text style={styles.textDate}>date</Text>
 <Text style={styles.textCard}>Name card</Text>
 </View>
 

      </SafeAreaView >
    );
  }
}

const containerStyle = {
       backgroundColor: '#4C6FAF',
       width: '100%',
       height: '100%',
       flex:1 ,
       flexDirection: 'column' ,
          
}
 
const styles = StyleSheet.create({
  
  container: {  
     
       alignItems: 'center',
       justifyContent: 'center' 
        
  },

  textContent :{
      color: '#E79995',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Quark',
      marginTop: 5,
     
    },


    image: {
       width: 62,
       height: 81,
       resizeMode: 'center',
       marginTop: 20,
       marginLeft: -210
    },

    textDate: {
      color: '#AAAAAA',
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'Quark',
    },

    textCard: {
      color: '#E79995',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Quark',
    }

});
export default HistoryScreen;
