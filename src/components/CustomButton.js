import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../contants/Colors";

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>GET OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 20,
    marginLeft: 30,
    marginEnd: 22,
    width: 327,
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
  appButtonText: {
    fontSize: 16,
    color: Colors.white,
    justifyContent: "center",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
    marginEnd: 6,
    marginStart: 6,
  },
});
