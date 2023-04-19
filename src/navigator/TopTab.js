import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import RequestCleaningProduct from '../screens/RequestCleaningProduct';
import CleaningProducts from '../screens/CleaningProducts';

const Top = createMaterialTopTabNavigator();

export default TopTab = () => {
    return (
        <Top.Navigator>
            <Top.Screen name='RequestCleaningProduct' component={RequestCleaningProduct} />
            <Top.Screen name='CleaningProduct' component={CleaningProducts} />
        </Top.Navigator>
    );
}
