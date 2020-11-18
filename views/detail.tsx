import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import {TStackParamList} from '../navigation/navigation';

export interface IDetailParams {
    itemId:number;
}

interface IDetailsProps extends StackScreenProps<TStackParamList, 'Details'>{}

export default function DetailsScreen(props:IDetailsProps) {
  const {
    route,
    navigation
  } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {route.params.itemId}</Text>
      <Button title='Go To Detail' onPress={()=>navigation.push('Details')} />
      <Button title='Go Back' onPress={()=>navigation.goBack()} />
      <Button title='Go Home' onPress={()=>navigation.popToTop()}/>
    </View>
  );
}