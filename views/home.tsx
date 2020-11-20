import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import CButton from '../components/Button';
import {TStackParamList} from '../navigation/navigation';

export interface IHomeParams {
}

interface IHomeProps extends StackScreenProps<TStackParamList, 'Home'>{}

export default function HomeScreen(props:IHomeProps){
  const {
    navigation
  } = props;

  const [count, setCount] = React.useState<number>(0);

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    })
  }, [navigation])

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <CButton title='Go To Detail' onPress={()=>navigation.navigate('Details', {itemId:97})} />
      <CButton title='Go To Post' onPress={()=>navigation.navigate('Post')} />
      <CButton title='Go To ImageShare' 
      onPress={()=>navigation.navigate('ImageShare', {title: 'Image Share'})} 
      />
      <CButton title='Go To Setting' onPress={()=>navigation.navigate('Setting')} />
    </View>
  )
}