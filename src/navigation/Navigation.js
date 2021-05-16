import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
import MobileVerificationScreen from '../screens/MobileVerificationScreen';
import OTPScreen from '../screens/OTPScreen';

const Stack = createStackNavigator();

function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="MobileVerification" component={MobileVerificationScreen} 
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen name='OTP' component={OTPScreen}
                options={{
                    headerShown:false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;