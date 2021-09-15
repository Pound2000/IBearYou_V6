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
 
          <View style={{flex: 1, alignItems : 'flex-start',marginTop: -52}}>
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
      marginTop: -320,
}}
    />
 
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

});
export default HistoryScreen;
