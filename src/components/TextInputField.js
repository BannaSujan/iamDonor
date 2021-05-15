import React from 'react';
import { StyleSheet,  View , TextInput} from 'react-native';


const TextInputField=({text,keyboardType})=> {
    return (
        <View >
            <TextInput style={styles.mobileNumber} placeholder={text} keyboardType={keyboardType}/>
        </View>
      );
    }

    export default TextInputField;
    const styles = StyleSheet.create({


        mobileNumber: {
            width: 250,
            height: 47,
            backgroundColor: '#EEECEC',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: '#ccc',
            borderRadius: 24,
            fontSize: 16,
            marginTop:10,
            marginEnd:6,
            marginStart:9,
        },
        
});