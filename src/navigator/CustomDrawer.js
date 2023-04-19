import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default CustomDrawer = (attributes) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Custom Drawer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#4498D680'
    }
})