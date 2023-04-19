import React from 'react';
import { View, Text, Button } from 'react-native';
import CustomButton from '../component/CustomButton'

export default Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title={'Cleaning Products'} onPress={() => {
                navigation.navigate('CleaningTab');
            }} />
            <CustomButton text='Home Screen' />
        </View>
    );
}
