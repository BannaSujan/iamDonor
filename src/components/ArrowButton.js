import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Ionicons,Fontisto } from '@expo/vector-icons';


const ArrowButton=(props)=> {
    return (

            <TouchableOpacity >
                <Ionicons name="arrow-back" size={30} color="#F55353" />
            </TouchableOpacity>

      );
    }

    export default ArrowButton;
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginLeft: 10,
        marginRight:30
      },
      header: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        marginLeft: 12,
      },
      circleShape: {
          padding: 10,
          marginLeft: 22,
          height:48,
          width:45,
          color:"#808080",
          backgroundColor: '#EEECEC',
          marginTop:10,
          marginEnd:6,
          marginStart:6,
          borderRadius:24,
          textAlign:'center',
          textAlignVertical:'center'
        },
        row: {
            flexDirection: "row"
          },


});