import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import {TTabeParamList} from './setting';

export interface IProfileParams {}

interface  IProfileProps extends BottomTabScreenProps<TTabeParamList, 'Profile'>{}

const Profile = (props:IProfileProps) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>This is profile screen</Text>
        </View>
    );
};

export default Profile;