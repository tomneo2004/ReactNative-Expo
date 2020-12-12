import { StackScreenProps } from '@react-navigation/stack';
import {TStackParamList} from '../../navigation/navigation';
import {Ionicons} from '@expo/vector-icons'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen, {IProfileParams} from './profile';
import SystemScreen, {ISystemParams} from './system';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';

export type TTabeParamList = {
    Profile: IProfileParams,
    System: ISystemParams
}

export interface ISettingParams{}

interface ISettingProps extends StackScreenProps<TStackParamList, 'Setting'>{}

const Tab = createBottomTabNavigator<TTabeParamList>();

const Setting = (props:ISettingProps) => {
    const {
        navigation,
    } = props;

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <Avatar
                containerStyle={{marginRight:8}}
                source={{
                    uri:'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg'
                }}
                rounded
                onLongPress={()=>alert('Long pressed on avatar')}
                />
                )
        })
    },[navigation]);
    return (
        <SafeAreaProvider>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Profile') {
                    iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
                } else if (route.name === 'System') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        initialRouteName='Profile'
        >
            <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarBadge:33}}
            initialParams={{username:'Unknow'}}
            />
            <Tab.Screen name='System' component={SystemScreen}
            initialParams={{ownerName:'IOwnYou'}}
            />
        </Tab.Navigator>
        </SafeAreaProvider>
    );
};

export default Setting;