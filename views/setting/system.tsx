import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { TTabeParamList } from './setting';

export interface ISystemParams {}

interface ISystemProps extends BottomTabScreenProps<TTabeParamList, 'System'>{}

const System = (props:ISystemProps) => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style="light" backgroundColor="#6a51ae" />
            <Text>This is system screen</Text>
        </SafeAreaView>
    );
};

export default System;