import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Button from '../components/Button';
import {TStackParamList} from '../navigation/navigation';
import { Rating, Tile } from 'react-native-elements';

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
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Tile
      imageSrc={{uri:'https://images.unsplash.com/photo-1521317925431-c2256dd4fe2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'}}
      icon={{ name: 'play-circle', type: 'font-awesome', size:44, color:'lightgrey' }}
      title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
      caption="Some Caption Text"
      featured
      width={300}
      overlayContainerStyle={{backgroundColor:'rgba(23,23,23,0.5)'}}
      />
      <Text>Details Screen</Text>
      <Text>Item ID: {route.params.itemId}</Text>
      <Button title='Go To Detail' onPress={()=>navigation.push('Details')} />
      <Button title='Go Back' onPress={()=>navigation.goBack()} />
      <Button title='Go Home' onPress={()=>navigation.popToTop()}/>
      <Rating 
      showRating 
      fractions={1} 
      startingValue={3.3} 
      />
    </SafeAreaView>
  );
}