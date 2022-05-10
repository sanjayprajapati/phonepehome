import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CustomHeader = () => {
    return (
    <View style={styles.header}>
        <Text>Hello</Text>
    </View>
    );
};
export default CustomHeader;
const styles = StyleSheet.create({
    header: {
        backgroundColor:'#fa8642',
        height: 80,
        flex:1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});