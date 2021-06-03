import React from 'react';
import{ View,Text,StyleSheet,Image} from 'react-native';


export default function Bg1() {
    return (
       <View style={styles.container}>
        
           <View style = {styles.header}>
       <Text>I Bear You</Text>
  
       </View>
       <View style= {styles.circle1} ></View>
       <View style= {styles.circle2} ></View>
       <View style= {styles.circle3} ></View>
       <View style= {styles.circle4} ></View>
       <View style= {styles.circle5} ></View>
 
             <View style= {styles.manu}></View>
              <Image source={require('../assets/images/Home.png')}
      style={styles.imageHome}/>  
             <Image source={require('../assets/images/diary.png')}
      style={styles.imageDiary}/>  
              <Image source={require('../assets/images/quiz.png')}
      style={styles.imageQuiz}/>  
             <Image source={require('../assets/images/voice.png')}
      style={styles.imageVoice}/>  
           <Image source={require('../assets/images/profile.png')}
      style={styles.imageProfile}/>  

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 32,
        
        },

    header: {
       height: 53,
       width: 414,
       padding: 18,
       backgroundColor: '#FFFFFF',
       alignItems: 'center',
    },

    text: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center'
    },

    circle1: {
        backgroundColor: '#F8D1D5',
        height: 150,
        width: 150,  
        borderRadius: 100,
        marginLeft: 320,
        marginTop: 36,
    },


    circle2: {
        backgroundColor: '#D4C6D4',
        height: 326,
        width: 326, 
        borderRadius: 200,
        marginRight: 330,
        marginTop: 1,
    },

     circle3: {
        backgroundColor: '#EFD2D3',
        height: 46,
        width: 46, 
        borderRadius: 200,
        marginLeft: 240,
        marginTop: -110,
    },

      circle4: {
        backgroundColor: '#FDF0DE',
        height: 30,
        width: 30, 
        borderRadius: 200,
        marginRight: 200,
        marginTop: 130,
    },

      circle5: {
        backgroundColor: '#FCE9DB',
        height: 170,
        width: 170, 
        borderRadius: 200,
        marginLeft: 160,
        marginTop: -30,
    },

    manu: {
        width: 414,
        height: 71,
        backgroundColor: '#FFFFFF',
       
        marginTop: -55,
    },
    
  imageHome: {
      marginTop: -60,
      marginRight: 310,
      width: 28,
      height: 26,
  },

    imageDiary: {
      marginTop: -27,
      marginRight: 160,
      width: 20.42,
      height: 25.9,
  },

    imageQuiz: {
      marginTop: -26,
      marginRight: 10,
      width: 30.56,
      height: 25.9,
  },

    imageVoice: {
      marginTop: -25,
      marginRight: -150,
      width: 25.99,
      height: 25.99,
  },

     imageProfile: {
      marginTop: -28,
      marginRight: -310,
      width: 26,
      height: 26,
  }

});

