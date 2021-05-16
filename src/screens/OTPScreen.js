import { StatusBar } from 'expo-status-bar';
import React,{Component,useRef} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native';
import ArrowButton from '../components/ArrowButton';
import CustomButton from '../components/CustomButton';


export default class OTPScreen extends Component{
    constructor(props){
        super(props)
        this.refs = React.createRef
        this.state={
            pin1:"",
            pin2:"",
            pin3:"",
            pin4:"",
    }
}
componentDidMount(){
    this.refs.pin1ref.focus()
}

handleVerify(){
    Alert.alert("OTP Verified","OTP has been verified",[{text:"OK"}])
}
    render(){
        const { pin1,pin2,pin3,pin4 } = this.state
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <ArrowButton/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.headings}>Verify OTP</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:'30%'}}>
                    <TextInput style={styles.otpinputs}
                    maxLength={1}
                    ref={"pin1ref"}
                    onChangeText={(pin1=>{
                        this.setState({pin1 : pin1})
                        if(pin1 != ""){
                            this.refs.pin2ref.focus()
                        }
                        })}
                    value={pin1}
                    keyboardType='numeric'
                    />
                    <TextInput 
                    style={styles.otpinputs}
                    maxLength={1}
                    ref={"pin2ref"}
                    onChangeText={(pin2=>{
                        this.setState({pin2 : pin2})
                        if(pin2 != ""){
                            this.refs.pin3ref.focus()
                        }
                        if(pin2 == ""){
                            this.refs.pin1ref.focus()
                        }
                        })}
                    value={pin2}
                    keyboardType='numeric'
                    />
                    <TextInput style={styles.otpinputs}
                    maxLength={1}
                    ref={"pin3ref"}
                    onChangeText={(pin3=>{
                        this.setState({pin3 : pin3})
                        if(pin3 != ""){
                            this.refs.pin4ref.focus()
                        }
                        if(pin3 == ""){
                            this.refs.pin2ref.focus()
                        }
                    })}
                    value={pin3}
                    keyboardType='numeric'
                    />
                    <TextInput style={styles.otpinputs}
                    maxLength={1}
                    ref={"pin4ref"}
                    onChangeText={(pin4=>{
                        this.setState({pin4 : pin4})
                        if(pin4 == ""){
                            this.refs.pin3ref.focus()
                        }
                        })}
                    value={pin4}
                    keyboardType='numeric'
                    />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',padding:20,justifyContent:'center'}}>
                    <Text onPress={()=>Alert.alert("OTP Sent!","OTP has been sent to your mobile number",[{text:"OK"}])}>Resend OTP</Text>
                    <CustomButton buttontitle="Verify" clickMe={this.handleVerify}/>
                </View>
            </View>
                




        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    paddingTop:20
    
  },
  otpinputs:{
    fontWeight:'600',
    backgroundColor:'#f5f4f2',
    height:50,
    width:50,
    margin:5,
    paddingLeft:'5%',
    borderRadius:100,
    borderWidth: 3,
    fontSize:20,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center'
  },headings:{
    flexDirection:'column-reverse',
    fontWeight:'700',
    color:'black',
    fontSize:24,
    justifyContent:'center',
    position:'absolute',
    bottom:0,
  }
});
