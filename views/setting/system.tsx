import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { TTabeParamList } from './setting';

export interface ISystemParams {}

interface ISystemProps extends BottomTabScreenProps<TTabeParamList, 'System'>{}

const System = (props:ISystemProps) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>This is system screen</Text>
        </View>
    );
};

export default System;