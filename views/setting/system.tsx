import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { ButtonGroup, Icon, Slider } from 'react-native-elements';
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
    const [sliderValue, setSliderValue] = React.useState<number>(5);

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
            <Slider
            value={sliderValue}
            minimumValue={0}
            maximumValue={100}
            step={1}
            onValueChange={(value)=>setSliderValue(value)}
            trackStyle={{ height: 10, width:200, backgroundColor: 'red' }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
            thumbProps={{
            children: (
                <Icon
                name="heartbeat"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color="#f50"
                />
            ),
            }}
            />
            <Text>Slider value: {sliderValue}</Text>
        </SafeAreaView>
    );
};

export default System;