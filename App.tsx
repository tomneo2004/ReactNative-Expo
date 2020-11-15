import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import Button from './components/Button';

type TStackParamList = {
  [key:string]:any
}

type IHomeProps = StackScreenProps<TStackParamList, 'Home'>;

function HomeScreen(props:IHomeProps){
  const {
    navigation
  } = props;

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home Screen</Text>
      <Button title='Go To Detail' onPress={()=>navigation.navigate('Details')} />
    </View>
  )
}

type IDetailsProps = StackScreenProps<TStackParamList, 'Home'>;

function DetailsScreen(props:IDetailsProps) {
  const {
    navigation
  } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title='Go To Detail' onPress={()=>navigation.push('Details')} />
    </View>
  );
}


const Stack = createStackNavigator<TStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{title: 'View'}}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
