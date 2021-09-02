import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';

import User from './Json/User' ;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

  
    <View style={{ flex: 1 }}>
 <Bg1/>
      <View isHome={true} navigation={this.props.navigation} />   
      
   <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{marginTop: -400}}>Home edit!</Text>
          <TouchableOpacity
        style={{marginTop: -50}}
        onPress={() => this.props.navigation.navigate('Graph')}
        >
        <Text> Go to graph </Text>
      </TouchableOpacity>



      </View>
  
    </View>


    );
  }
}

export default HomeScreen;
