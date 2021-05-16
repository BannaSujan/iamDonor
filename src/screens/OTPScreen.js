import { StatusBar } from 'expo-status-bar';
import React,{Component,useRef} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native';
import ArrowButton from '../components/ArrowButton';
import CustomButton from '../components/CustomButton';
import Colors from "../contants/Colors";

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
                <View style={styles.content}>
                   <ArrowButton />
                   <Text style={styles.header}>Verify OTP</Text>
                     <View style={styles.circles}>
                        <View>
                            <TextInput style={styles.otpInputs}
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
                        </View>
                        <View>
                            <TextInput
                                style={styles.otpInputs}
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
                        </View>
                        <View>
                            <TextInput style={styles.otpInputs}
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
                        </View>
                        <View>
                            <TextInput style={styles.otpInputs}
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
                     </View>
                </View>
                <View style={styles.buttons}>
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
      flex:1,
      marginLeft: "2%",
      paddingTop:50,
      marginTop: StatusBar.currentHeight,

    },
  content: {
       backgroundColor: Colors.white,
       flex: 1,
       paddingTop: "2%",
       marginLeft: "2%",
       marginRight: "2%",
  },
  header: {
       flexDirection:'column-reverse',
       fontWeight:'700',
       color:'black',
       fontSize:24,
       textAlign: 'center',
       marginVertical: 240,
  },
  otpInputs:{
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
    },
    circles:{
        flexDirection: "row",
        marginVertical: -215,
        justifyContent:'center',
    },
    buttons: {
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        padding: 20,
        paddingRight: 50,
        justifyContent:'center',
        marginVertical: 365,
    }
});
