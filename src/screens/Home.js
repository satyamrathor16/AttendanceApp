import React from 'react';
import { View, Text, Button } from 'react-native';
import CustomButton from '../component/CustomButton'

export default Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title={'My Work'} onPress={() => {
                navigation.navigate('MyWork', {
                    first_name: 'satyam',
                    last_name: 'rathuar'
                });
            }} />

            {/* <CustomButton text='Home Screen' /> */}
        </View>
    );
}
