import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Training from '../screens/Training';
import Drawer from './Drawer';
import HomeNavigator from './HomeNavigator'

const Tab = createBottomTabNavigator();

export default Bottom = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name='HomeNavigator' component={HomeNavigator} options={{ title: 'Home' }} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='Trainig' component={Training} />
        </Tab.Navigator>
    );
}
