import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';


class MoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
 return (
     <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title='Mood'  navigation={this.props.navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How do you feel?</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        >
        <Text> Let's Get Started </Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
  }
}

export default MoodScreen;
