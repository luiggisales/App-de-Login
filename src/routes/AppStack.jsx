//* Para Usúarios Autenticados
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();


export function AppStack(){
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Navigator>
    );
}