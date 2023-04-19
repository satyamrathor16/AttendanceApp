import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash';
import Signup from '../screens/Signup';
import Bottom from './Bottom';
import Drawer from './Drawer';
import TopTab from './TopTab';

const Stack = createNativeStackNavigator();

export default MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Drawer' component={Drawer} options={{
          headerShown: false,
          title:'Stack Navigator'
        }} />
        <Stack.Screen name='CleaningTab' component={TopTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
