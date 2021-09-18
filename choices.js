import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import CustomHeader from './CustomHeader';
import { connect } from 'react-redux'; 
import {fetchQuestions,setCurrentQuestion} from './actions/Questions';
import {setQuestionId,incrementAction} from './actions/Questions';



class Choices extends Component {
  
constructor(props) {
   super(props)
  
  }
  nextQuestion=async()=>{ 
    const currentIndex = this.props.questions.findIndex(e=>e.questionId === this.props.questionId)
    if(currentIndex>=this.props.questions.length-1) return;
    const nextIndex =currentIndex+1
    await this.props.dispatch(setCurrentQuestion(this.props.questions[nextIndex])) //Question.currentQuestion
    await this.props.dispatch(setQuestionId(this.props.questions[nextIndex].questionId));  

  }

   previousQuestion=async()=>{ 
    const currentIndex = this.props.questions.findIndex(e=>e.questionId === this.props.questionId)
    if(currentIndex<1) return;
    const previousIndex =currentIndex-1
    await this.props.dispatch(setCurrentQuestion(this.props.questions[previousIndex])) //Question.currentQuestion
    await this.props.dispatch(setQuestionId(this.props.questions[previousIndex].questionId));  

  }
  render() {

let {questions,questionId,currentQuestion} = this.props 

    return (
      <SafeAreaView  style={[styles.container, containerStyle]}>
      
 

<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bg-Blue.png')}
    style={{width:568 ,height: 580,marginTop:100,marginRight: 40}} />     
 </View>

<View style={{flex: 1, alignItems: 'center'}}>  

       <Image source={require('./assets/images/Vector-Pink.png')}
    style={{width:552.17 ,height: 323.61,marginTop: -180}} /> 

    <View style={styles.date}>
    <Text style={styles.day}>อา.</Text>
    <Text style={styles.number}>18</Text>
    <Text style={styles.month}>ก.ค</Text>
    </View> 

    <View style={{marginLeft: 100,marginTop: -85}}>
      <Text style={styles.topic}>ประโยคพิเศษประจำวันจากน้องหมี </Text>
      <Text style={styles.sentence}>"มะม่วงยังสุก เราจะทุกข์ทำไม"</Text>
    </View>

</View>


<View style={{flex: 1, alignItems : 'flex-start',marginTop: -55}}>
 <CustomHeader title='Choices'  navigation={this.props.navigation}/>
 </View>


<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:90.18, height: 90.18, marginTop:552,marginRight: 385}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18, marginTop: 70,marginRight: 180}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18,marginTop: 310,marginLeft: 385}} />     
    </View>

     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-4.png')}
    style={{width:40.33, height: 40.33,marginTop: 500}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-5.png')}
    style={{width:28.3, height: 28.3,marginTop: 400,marginRight: 350}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-7.png')}
    style={{width:18.38, height: 18.38,marginTop: 62,marginLeft: 300}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center'}}>  
       <Image source={require('./assets/images/Star-8.png')}
    style={{width:34.3, height: 34.3,marginTop: -15,marginLeft: -10}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-9.png')}
    style={{width:21.68, height: 21.68,marginTop: -25,marginRight: 320}} />     
 </View>

      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bear-Cupid.png')}
    style={{width:145.52, height: 155.24,marginTop: 270,marginRight: -200}} />     
 </View>

<View style={{flex:1}}>
  <View style={styles.question}>
       <Text style={styles.textQuestion} >{currentQuestion.detail} </Text>
  </View>
</View>
     

     <View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
<View >
     <TouchableOpacity
       style={{marginTop:30, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={styles.textChoices}>
     อารมณ์ดีมาก 
     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={styles.textChoices}>อารมณ์ดี</Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={styles.textChoices}>
     รู้สึกเฉยๆ
     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={styles.textChoices}>
     ไม่ค่อยดี
     </Text>
     </TouchableOpacity>

          <TouchableOpacity
       style={{marginTop:20, borderRadius: 10,
       backgroundColor: '#FFFFFF',
       height: 50,
       width: 314,
       alignItems: 'flex-start',
       justifyContent: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 1, height: 4 },
       shadowOpacity:  0.20,
       shadowRadius:3,
       elevation: 5,
       }}>
     <Text style={styles.textChoices}>
     รู้สึกเศร้า
     </Text>
     </TouchableOpacity>
     </View>
   
    </View>

 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 30}}>
  <TouchableOpacity style={styles.button} activeOpacity ={0.75}
    onPress = {() => this.previousQuestion()}
   >
       <Text style={styles.textButton}>ย้อนกลับ</Text>
  </TouchableOpacity>
 
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
        onPress = {() => this.nextQuestion()}
     >
       <Text style={styles.textButton}>ถัดไป</Text>
     </TouchableOpacity>
</View>

    </SafeAreaView>
 


   
  
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

textButton:{
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
        
},

button:{
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 102,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
       margin: 60,
       marginBottom: -10,
      alignItems: 'center',
        
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
    },

    question: {
       borderRadius: 10,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#FFFFFF',
       height: 127,
       width: 355,
       shadowColor: '#E79995',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  1,
       shadowRadius:0,
       elevation: 2,
      marginTop: -90

    },

    textQuestion: {
      fontSize: 24,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    textChoices: {
      fontSize: 18,
      color:'#000000',
      fontFamily: 'Quark',
      marginLeft: 20,
    }


});
const mapStateToProps=(state,props)=>{ 
  
  return{

    questions:state.Questions.questions,
    questionId:state.Questions.questionId,
    currentQuestion:state.Questions.currentQuestion
  }
}
export default connect (mapStateToProps) (Choices);
