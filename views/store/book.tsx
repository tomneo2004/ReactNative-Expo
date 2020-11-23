import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';
import { TDrawerParamList } from './store';

export interface IBookParams{}

interface IBookProps extends DrawerScreenProps<TDrawerParamList, 'Book'>{}

const Book = (props:IBookProps) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Book</Text>
            <Text>Swipe left to show menu</Text>
        </View>
    );
};

export default Book;