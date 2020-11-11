import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Logo() {
    return (
        <View style={style.root}>
            <Text style={style.title}>IMAGE SHARE</Text>
            <Text style={style.logo}>🌄</Text>
        </View>
    );
};

const style = StyleSheet.create({
    root:{
        width: '85%',
        height: '20%',
        backgroundColor: '#000',
        borderRadius: 4,
        justifyContent: 'space-evenly',
        alignItems: 'center' 
    },
    title:{
        color: '#fff',
        fontSize: 40,
    },
    logo:{
        fontSize: 80
    }
});