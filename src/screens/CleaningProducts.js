import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default CleaningProduct = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>CleaningProduct</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})