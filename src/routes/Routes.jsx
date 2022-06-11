import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Loading from '../components/Loading';
import { userAuth } from '../contexts/Auth';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export function Router(){
    const { user , loading } = userAuth();
    if (loading){ return <Loading/> };
    
    return (
        <NavigationContainer>
            {user ? <AppStack/>: <AuthStack/>}
        </NavigationContainer>
    );
}