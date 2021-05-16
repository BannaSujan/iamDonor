import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import Colors from "../contants/Colors";
const ArrowButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name="arrow-back" size={30} color={Colors.primary } />
    </TouchableOpacity>
  );
};

export default ArrowButton;
const styles = StyleSheet.create({});
