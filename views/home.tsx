import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import {TStackParamList} from '../navigation/navigation';

export interface IHomeProps {
}

type THomeProps = StackScreenProps<TStackParamList, 'Home'>;

export default function HomeScreen(props:THomeProps){
  const {
    navigation
  } = props;

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home Screen</Text>
      <Button title='Go To Detail' onPress={()=>navigation.navigate('Details', {itemId:97})} />
    </View>
  )
}