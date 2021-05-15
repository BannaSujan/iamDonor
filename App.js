import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

import MobileVerificationScreen from './src/screens/MobileVerificationScreen';

export default function App() {
  return (
    // <LoginScreen/>
    <MobileVerificationScreen/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
