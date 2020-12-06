import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {TTabeParamList} from './setting';

export interface IProfileParams {
    username: string;
}

type  IProfileProps = BottomTabScreenProps<TTabeParamList, 'Profile'>

const Profile = (props:IProfileProps) => {
    const {
        route,
    } = props;

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style="dark" backgroundColor="#ecf0f1" />
            <Text>This is profile screen</Text>
            <Text>{route.params.username}</Text>
        </SafeAreaView>
    );
};

export default Profile;