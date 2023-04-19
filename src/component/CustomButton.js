import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default CustomButton = (props) => {

    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={() => {
                console.log('This is Custom Button');
            }}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 44,
        borderRadius: 4,
        backgroundColor: '#4498D6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white'
    }
})