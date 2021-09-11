import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       , TextInput}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';

class WishScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4'  }}>

<View style={{flex: 1, alignItems: 'center'}}>  

       <Image source={require('./assets/images/Vector-Pink.png')}
    style={{width:552.17 ,height: 323.61,marginTop: -140}} /> 

    <View style={styles.date}>
    <Text style={styles.day}>อา.</Text>
    <Text style={styles.number}>18</Text>
    <Text style={styles.month}>ก.ค</Text>
    </View> 

    <View style={{marginLeft: 100,marginTop: -85}}>
      <Text style={styles.topic}>ประโยคพิเศษประจำวันจากน้องหมี</Text>
      <Text style={styles.sentence}>"มะม่วงยังสุก เราจะทุกข์ทำไม"</Text>
    </View>

 </View>

<View>
    <View style={{flex: 1, alignItems : 'flex-start',marginTop: -239}}>
        <CustomHeader title='wish' navigation={this.props.navigation}/>
    </View>
 </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <View style={{flex: 1,marginTop: -52}}>  
  <View style = {styles.Wish}>  
           <Text style = {styles.textType}>ความคาดหวัง</Text>  
  </View>
  

<View style={{flex: 1}}>
      <Text style={styles.textDate}>18 กรกฎาคม 2564</Text>
      <View style={styles.boxContent}>
        <TextInput style ={styles.textContent} />
      </View>
</View>
      </View>
</View>

<View style = {{flex: 1}}>
   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shell-2.png')}
    style={{width:35 ,height:29,marginTop:-78,marginLeft:375}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/crab.png')}
    style={{width:43 ,height:25,marginTop:-185,marginRight:380}} />     
 </View>


<View style={{flex: 1}}>
    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shoe.png')}
    style={{width:22.33,height:22.99,marginTop:-15,marginLeft:-120}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/bear-sun.png')}
    style={{width:113.89,height:106.56,marginTop:-60,marginRight:250}} />     
 </View>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/umbrella-red.png')}
    style={{width:127 ,height:125.35,marginTop: -90,marginRight: -260}} />     
 </View>

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Polygon.png')}
    style={{width:436 ,height:109,marginTop: -40,marginRight: 10}} />   
</View>  
</View>

</View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

    Wish:{
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
      marginBottom: 20,
    },

    textType: {
      fontSize: 20,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 11,
    },

    textDate: {
      fontSize: 14,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginBottom: 5
    },

    textContent: {
      fontSize: 14,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginBottom: 5
    },

    boxContent: {
      width: 354,
      height: 40,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#FF9E45',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 30,
    },

    date: {
      width: 44,
      height: 88,
      backgroundColor: '#FFFFFF',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomWidth: 30,
      borderBottomColor: '#FE8150',
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -135,
      marginLeft: -270,
    },

    day: {
      fontSize: 14,
      color:'#000000',
      fontFamily: 'Quark',
      marginBottom: 5,
      marginTop: 10,
      marginLeft: 14,
    },

    number: {
      fontSize: 24,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 6,
      marginTop: -5,
    },
    month: {
      fontSize: 18,
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 12,
      marginTop: -5,
    },

      topic: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 12,
      marginTop: -5,
    },

      sentence: {
      fontSize: 18,
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 12,
      marginTop: -3,
    }


});

export default WishScreen;
