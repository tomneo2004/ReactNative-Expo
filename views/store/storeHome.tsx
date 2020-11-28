import { DrawerScreenProps, useIsDrawerOpen } from '@react-navigation/drawer';
import {TDrawerParamList} from './store';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

export interface IStoreHomeParams {}

interface IStoreHomeProps extends DrawerScreenProps<TDrawerParamList, 'Home'>{}

const StoreHome = (props:IStoreHomeProps) => {
    const isDrawerOpen = useIsDrawerOpen();

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style='inverted' backgroundColor='#000' />
            <Text>Store Home</Text>
            <Text>Swipe left to show menu</Text>
            <Text>Drawer open: {isDrawerOpen?'true':'false'}</Text>
        </SafeAreaView>
        
    );
};

export default StoreHome;