import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../contants/Colors";




const CustomButton=(props)=> {
    const clickMe = () =>{
      props.clickMe
    }

    return (
        
            <View >
                  <TouchableOpacity onPress={this.clickMe} style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText} >{props.buttontitle}</Text>
                  </TouchableOpacity>
            </View>

      );
    }

    export default CustomButton;
    const styles = StyleSheet.create({
    
        appButtonContainer: {
            margin:20,
            width: '90%',
            height :40,
            backgroundColor: "#F55353",
            borderRadius: 100,
          },
          appButtonText: {
            fontSize: 16,
            color: "#fff",
            justifyContent: 'center',
            fontWeight: "bold",
            alignSelf: "center",
            marginTop:10,
            marginEnd:6,
            marginStart:6,
          }
});

