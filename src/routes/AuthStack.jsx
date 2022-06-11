import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SingIn from '../screens/SingIn';
import SingUp from "../screens/SingUp";

const Stack = createStackNavigator();


export function AuthStack(){
    return (
        <Stack.Navigator initialRouteName="SingIn">
            <Stack.Screen name='SingIn' component={SingIn}/>
            <Stack.Screen name='SingUp' component={SingUp}/>
        </Stack.Navigator>
    );
}