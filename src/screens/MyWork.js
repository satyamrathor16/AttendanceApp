import React, { useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,

    //Not used in Practical
    Modal
} from 'react-native';

export default MyWork = ({ navigation, route }) => {

    useEffect(() => {
        console.log(route.params.first_name);
    }, [])

    return (
        <View>
            <Text>My Work</Text>
            <Text style={styles.Names}>{route.params.first_name}</Text>
            <Text style={styles.Names}>{route.params.last_name}</Text>
            <Button title={'Cleaning Products'} onPress={() => {
                navigation.navigate('CleaningTab');
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    Names: {
        fontSize: 20
    }
})