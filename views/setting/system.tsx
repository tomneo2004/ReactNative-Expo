import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { TTabeParamList } from './setting';

export interface ISystemParams {
    ownerName:string;
}

interface ISystemProps extends BottomTabScreenProps<TTabeParamList, 'System'>{}
interface ISystemRouteProps extends RouteProp<TTabeParamList, 'System'>{};

const buttons = ['Hello', 'World', 'Buttons'];

const System = (props:ISystemProps) => {
    const route = useRoute<ISystemRouteProps>();
    const [index, setIndex] = React.useState<number>(1);
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style="light" backgroundColor="#6a51ae" />
            <Text>This is system screen</Text>
            <Text>{route.params.ownerName}</Text>
            <ButtonGroup
            onPress={(selectedIndex)=>setIndex(selectedIndex)}
            selectedIndex={index}
            buttons={buttons}
            // containerStyle={{height: 100}}
            />
        </SafeAreaView>
    );
};

export default System;