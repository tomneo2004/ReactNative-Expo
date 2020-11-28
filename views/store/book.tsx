import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { TDrawerParamList } from './store';

export interface IBookParams{}

interface IBookProps extends DrawerScreenProps<TDrawerParamList, 'Book'>{}

const Book = (props:IBookProps) => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style='dark' backgroundColor='#000' />
            <Text>Book</Text>
            <Text>Swipe left to show menu</Text>
        </SafeAreaView>
    );
};

export default Book;