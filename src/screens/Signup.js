import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../component/CustomButton'

export default Signup = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Button
                title='Submit'
                onPress={() => {
                    navigation.replace('Drawer');
                    // navigation.replace('Bottom');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
})