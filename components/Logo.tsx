import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {
    title: string;
}
export default function Logo(props:IProps) {
    const {
        title
    } = props;

    return (
        <View style={style.root}>
            <Text style={style.title}>{title}</Text>
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