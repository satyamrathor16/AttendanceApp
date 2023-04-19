import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default Splash = ({ navigation }) => {

    useEffect(() => { // called automatically
        setTimeout(() => {
            navigation.replace('Signup');
        }, 3000);
    }, [])

    return (
        <View>
            <Text>Splash</Text>
        </View>
    );
}
