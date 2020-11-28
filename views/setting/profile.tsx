import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {TTabeParamList} from './setting';

export interface IProfileParams {}

interface  IProfileProps extends BottomTabScreenProps<TTabeParamList, 'Profile'>{}

const Profile = (props:IProfileProps) => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style="dark" backgroundColor="#ecf0f1" />
            <Text>This is profile screen</Text>
        </SafeAreaView>
    );
};

export default Profile;