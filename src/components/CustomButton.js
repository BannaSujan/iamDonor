import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';


const CustomButton=(props)=> {
    return (
        
            <View >
                  <TouchableOpacity style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>GET OTP</Text>
                  </TouchableOpacity>
            </View>

      );
    }

    export default CustomButton;
    const styles = StyleSheet.create({
    
        appButtonContainer: {
            marginTop: 20,
            marginLeft: 30,
            marginEnd : 22,
            width: 300,
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