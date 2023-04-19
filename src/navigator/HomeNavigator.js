import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import MyWork from '../screens/MyWork'
import TopTab from './TopTab';


const Stack = createNativeStackNavigator();

export default HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='MyWork' component={MyWork} />
            <Stack.Screen name='CleaningTab' component={TopTab} />
        </Stack.Navigator>
    );
}
