import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen, {IHomeProps} from '../views/home';
import DetailsScreen, {IDetailProps} from '../views/detail';
import PostScreen, {IPostProps} from '../views/post';
import AddPostScreen, {IAddPostProps} from '../views/addPost';

export type TStackParamList = {
    Home: IHomeProps;
    Details: IDetailProps;
    Post: IPostProps;
    AddPost: IAddPostProps
}

const Stack = createStackNavigator<TStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{title: 'View'}}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Details'}}
        initialParams={{itemId:0}}
        />
        <Stack.Screen name='Post' component={PostScreen} options={{title:'Post'}} />
        <Stack.Screen name='AddPost' component={AddPostScreen} options={{title:'Add Post'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}