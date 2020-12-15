import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { TDrawerParamList } from './store';
import { Icon, Image } from 'react-native-elements'
import { ActivityIndicator } from 'react-native';

export interface IBookParams{
    bookName: string;
    bookId: number;
}

const image = 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80'

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
            <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
            />
        </SafeAreaView>
    );
};

export default Book;