import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import Bg_Rainy from './components/Bg_Rainy';

import CustomHeader from './CustomHeader';


class MoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feel : true,
      next : true,
    };
    this.veryGood = this.verygood;
    this.good = this.good;
  }

  selectedFeel = () => {
     this.setState({
       feel: !this.state.feel,
       next: !this.state.next,
     })
      console.log ('selected seccess!')
  }



 

  render() {
    const veryGood = this.state.veryGood ;
    const good = this.state.good ;


 return (
<SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4'}}>
     
 <View style={{ flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}> 
      
    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/rainy.png')}
        style={{width:392 ,height:294,marginTop: -47}} />  
    </View>


    <View style={{flex: 1, alignItems : 'center',marginTop:-165}}>   
      <CustomHeader title='Mood'  navigation={this.props.navigation}/>
    </View>
</View>
    
  <View style={{flex: 1}}>
    <View style={styles.boxContent}>
        <Text style={styles.textContent}>วันนี้เธอรู้สึกอย่างไร</Text>
    </View>
    

  </View>

<View style={{flex: 1,marginBottom: 110}}>

   {this.state.feel
      ?   
      <TouchableOpacity style={styles.buttonVeryGood} activeOpacity={1}
       onPress ={() => this.selectedFeel()}>
       <View>
       <Text style={styles.textMood}>รู้สึกอารมณ์ดีมาก</Text>
        <Image source={require('./assets/images/bear-verygood.png')}
       style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}}
       />
       </View>
       </TouchableOpacity>
       :
       <View>
       <View style={styles.clickVeryGood}></View>
       <TouchableOpacity style={styles.buttonVeryGood} activeOpacity={1}
       onPress ={() => this.selectedFeel()}>
       <Text style={styles.textMood}>รู้สึกอารมณ์ดีมาก</Text>
        <Image source={require('./assets/images/bear-verygood.png')}
       style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}}
       />
       </TouchableOpacity>
       </View>
  }  
    



      
</View>

<View>
<Image source={require('./assets/images/bear-rain.png')}
       style={{width:100.56,height:104.02,marginTop: 10,marginLeft:130,marginBottom: -65}}
       />
 
<Image source={require('./assets/images/polygon2.png')}
       style={{width:201.655,height:118.87,marginTop: 0,marginLeft: -55,marginBottom: -90}}
       />
 
<Image source={require('./assets/images/footprint.png')}
       style={{width:48,height:18.78,marginTop: 10,marginLeft: 110,marginBottom: 0}}
       />
</View>
     
<View>
{ this.state.next
        ?
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('Diary')}
        style={styles.buttonNext_before} activeOpacity={0.75} disabled={true} >
        <Text style={styles.textNext}>ถัดไป</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('Diary')}
        style={styles.buttonNext_after} activeOpacity={0.75}>
        <Text style={styles.textNext}>ถัดไป</Text>
        </TouchableOpacity>
}
</View>

     </SafeAreaView>
  );
  }
}


const styles = StyleSheet.create({

    boxContent:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginLeft: 80,
      marginTop: -50,
      borderRadius: 10,
      shadowColor: '#87D6E8',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
    },

    textContent: {
     color: '#000000',
     fontSize: 24,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 10,
    },

    buttonVeryGood: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#70BA97',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -65,
      marginBottom: 15,
      marginLeft: 32,
    },

      buttonGood: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#FFF96E',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 0,
      marginLeft: 32,
      marginTop: 7,
    },

      buttonIndifferent: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#FFAD8A',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginTop: 22,
      marginLeft: 32,
    },

      buttonBad: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#87D6E8',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginLeft: 32,
      marginTop: 7,
    },

      buttonVeryBad: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#00576A',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginLeft: 32,
      marginTop:7,
    },

    textMood: {
     color: '#000000',
     fontSize: 18,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 15,
     marginTop: 12,
    
    },

    clickVeryGood: {
      flex: 1,  
      width: 414,
      backgroundColor: '#70BA97',
      marginBottom: 5,
      marginLeft: -20,
      marginTop: -72,
     
    },

    clickGood: {
      flex: 1,
      width: 414,
      backgroundColor: '#FFF96E',
      marginBottom: -60,
      marginLeft: -20,
      marginTop: -10,
      paddingBottom: 70,
      paddingTop: -72,
    },

    clickIndifferent: {
      height: 70,
      width: 414,
      backgroundColor: '#FFAD8A',
      marginBottom: -80,
      marginLeft: -20,
      marginTop: 10,
      paddingBottom: 6,
      paddingTop: 3,
    },

    clickBad: {
      height: 65,
      width: 414,
      backgroundColor: '#87D6E8',
      marginBottom: -60,
      marginLeft: -20,
      marginTop: -5,
      paddingBottom: 6,
      paddingTop: 3,
    },

    clickVeryBad: {
      height: 70,
      width: 414,
      backgroundColor: '#00576A',
      marginBottom: -63,
      marginLeft: -20,
      marginTop: -7,

    },

buttonNext_before: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#A6A6A6',
       height: 41,
       width: 102,
       marginTop: -55,
       marginBottom: 30,
       marginLeft: 260,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
},

buttonNext_after: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 102,
       marginTop: -55,
       marginBottom: 30,
       marginLeft: 260,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
},

textNext: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
}

    });

export default MoodScreen;
