import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen, {IHomeProps} from '../views/home';
import DetailsScreen, {IDetailProps} from '../views/detail';

export type TStackParamList = {
    Home: IHomeProps;
    Details: IDetailProps;
}

const Stack = createStackNavigator<TStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{title: 'View'}}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}