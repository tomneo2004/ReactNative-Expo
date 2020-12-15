import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { TDrawerParamList } from './store';
import { Icon } from 'react-native-elements'

export interface IBookParams{
    bookName: string;
    bookId: number;
}

interface IBookProps extends DrawerScreenProps<TDrawerParamList, 'Book'>{}

const Book = (props:IBookProps) => {
    const {
        route,
    } = props;

    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
            <FocusAwareStatusBar style='dark' backgroundColor='#000' />
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={<Icon raised reverse name='heartbeat' type='font-awesome' />}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{paddingTop:0}}
            />
            <Text>Book</Text>
            <Text>Swipe left to show menu</Text>
            <Text>{route.params.bookName}</Text>
            <Text>{route.params.bookId}</Text>
        </SafeAreaView>
    );
};

export default Book;