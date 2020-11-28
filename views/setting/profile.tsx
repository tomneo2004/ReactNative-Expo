import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {TTabeParamList} from './setting';

export interface IProfileParams {}

interface  IProfileProps extends BottomTabScreenProps<TTabeParamList, 'Profile'>{}

const Profile = (props:IProfileProps) => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>This is profile screen</Text>
        </SafeAreaView>
    );
};

export default Profile;