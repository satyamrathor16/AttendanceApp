import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = () => {

    // var PI = 3.14;
    const [value, setValue] = useState('Satyam');
    const [value1, setValue1] = useState('ABC');


    useEffect(() => {
        console.log('The Screen is now visible'); //Born
        return (() => {
            console.log('The Screen is now vanish'); //Die
        })
    }, [])

    useEffect(() => {
        console.log('The value is changed'); //Update of mantioned states ex: value, value1
    }, [value, value1])

    const onChangeValue = useCallback(() => {
        console.log('The value1 is changed Callback');
    }, [value1])

    // useEffect(() => {
    //     return (() => {
    //         console.log('The Screen is now vanish');
    //     })
    // }, [])

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => {
                    setValue1('Tareq')
                    // PI = 3.15
                }}
                style={styles.buttonDesign}
            >
                <Text style={styles.textStyle}>{value}</Text>
            </TouchableOpacity>
            {/* <Text style={styles.textStyle1}>{PI}</Text> */}
            <Text style={styles.textStyle1}>{value1}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonDesign: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'red',
        marginTop: 20,
        borderRadius: 5
    },
    textStyle: {
        fontSize: 20,
        color: 'white'
    },
    textStyle1: {
        fontSize: 20,
        color: 'black'
    }

})

export default SplashScreen