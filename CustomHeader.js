import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';


class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let {navigation, isHome, title} = this.props
    return (
    <View style={{flexDirection: 'row',height: 50}}>
<View>
{
  isHome?
  
    null
    :
    <View>
   
    <TouchableOpacity
    style={{flexDirection:'row', alignItems: 'center'}}
    onPress = {() => this.props.navigation.goBack()}
    > 
    <Image source={require('./assets/images/back.png')} 
    style={{width: 14.32,height:26,marginLeft: 20}} 
    resizeMode='contain'
    />
    </TouchableOpacity>
    </View>
}
</View>

  <View style={{flex: 1.5, justifyContent: 'center'}}>
    <Text style={{textAlign: 'center'}}>I Bear You</Text>
    </View>
     </View>
    );
  }
}

export default CustomHeader;

 

