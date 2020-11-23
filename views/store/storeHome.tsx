import { DrawerScreenProps } from '@react-navigation/drawer';
import {TDrawerParamList} from './store';
import React from 'react';
import { Text, View } from 'react-native';

export interface IStoreHomeParams {}

interface IStoreHomeProps extends DrawerScreenProps<TDrawerParamList, 'Home'>{}

const StoreHome = (props:IStoreHomeProps) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Store Home</Text>
            <Text>Swipe left to show menu</Text>
        </View>
    );
};

export default StoreHome;