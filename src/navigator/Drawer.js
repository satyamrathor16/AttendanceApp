import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Bottom from './Bottom';
import Home from '../screens/Home';
import CustomDrawer from './CustomDrawer'

const DrawerNav = createDrawerNavigator();

const EditProfile = () => {
    return (
        <View>
            <Text>EditProfile</Text>
        </View>
    )
}

const Drawer = () => {
    return <DrawerNav.Navigator
        drawerContent={(props) => {
            return <CustomDrawer {...props} />
        }}
    >
        <DrawerNav.Screen name='Bottom' component={Bottom} />
        <DrawerNav.Screen name='Edit Profile' component={EditProfile} />
    </DrawerNav.Navigator>
}

export default Drawer;