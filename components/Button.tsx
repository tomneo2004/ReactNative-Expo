import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

interface IProps extends TouchableOpacityProps {
    title:string;
}
export default function Button(props:IProps){
    const {
        title,
        ...rest
    } = props;
    return (
        <TouchableOpacity
        style={styles.button}
        {...rest}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "blue",
        padding: 20,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 20,
        color: '#fff',
    },
})