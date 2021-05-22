import { StatusBar } from "expo-status-bar";
import React, { Component, useRef, useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import ArrowButton from "../components/ArrowButton";
import CustomButton from "../components/CustomButton";
import Colors from "../contants/Colors";

export default function OTPScreen (){
    const pin1ref = useRef(null)
    const pin2ref = useRef(null)
    const pin3ref = useRef(null)
    const pin4ref = useRef(null)
    const [ pin1 , setPin1] = useState("")
    const [ pin2 , setPin2] = useState("")
    const [ pin3 , setPin3] = useState("")
    const [ pin4 , setPin4] = useState("")
    const handleVerify=()=>{
      Keyboard.dismiss()
    }
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ArrowButton />
          <Text style={styles.header}>Verify OTP</Text>
          <View style={styles.circles}>
            <View>
              <TextInput
                autoFocus={true}
                style={styles.otpInputs}
                maxLength={1}
                ref={pin1ref}
                onChangeText={(pin1) => {
                  setPin1(pin1)
                  if (pin1 != "") {
                    pin2ref.current.focus()
                  }
                }}
                value={pin1}
                keyboardType="numeric"
              />
            </View>
            <View>
              <TextInput
                style={styles.otpInputs}
                maxLength={1}
                ref={pin2ref}
                onChangeText={(pin2) => {
                  setPin2(pin2)
                  if (pin2 != "") {
                    pin3ref.current.focus()
                  }
                  if (pin2 == "") {
                    pin1ref.current.focus()
                  }
                }}
                value={pin2}
                keyboardType="numeric"
              />
            </View>
            <View>
              <TextInput
                style={styles.otpInputs}
                maxLength={1}
                ref={pin3ref}
                onChangeText={(pin3) => {
                  setPin3(pin3)
                  if (pin3 != "") {
                    pin4ref.current.focus()
                  }
                  if (pin3 == "") {
                    pin2ref.current.focus()
                  }
                }}
                value={pin3}
                keyboardType="numeric"
              />
            </View>
            <View>
              <TextInput
                style={styles.otpInputs}
                maxLength={1}
                ref={pin4ref}
                onChangeText={(pin4) => {
                  setPin4(pin4)
                  if (pin4 == "") {
                    pin3ref.current.focus()
                  }
                }}
                value={pin4}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Text
            onPress={() =>
              Alert.alert(
                "OTP Sent!",
                "OTP has been sent to your mobile number",
                [{ text: "OK" }]
              )
            }
          >
            Resend OTP
          </Text>
          <CustomButton buttontitle="Verify" clickMe={handleVerify} />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginLeft: "2%",
    paddingTop: 50,
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
    flexDirection: "column-reverse",
    fontWeight: "700",
    color: "black",
    fontSize: 24,
    textAlign: "left",
    paddingLeft:65,
    marginVertical: 240,
  },
  otpInputs: {
    fontWeight: "600",
    backgroundColor: "#f5f4f2",
    height: 50,
    width: 50,
    margin: 5,
    paddingLeft: "5%",
    borderRadius: 100,
    borderWidth: 3,
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  circles: {
    flexDirection: "row",
    marginVertical: -215,
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    paddingRight: 50,
    justifyContent: "center",
    marginVertical: 365,
  },
});
