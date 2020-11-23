import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen, {IHomeParams} from '../views/home';
import DetailsScreen, {IDetailParams} from '../views/detail';
import PostScreen, {IPostParams} from '../views/post';
import AddPostScreen, {IAddPostParams} from '../views/addPost';
import ImageShareScreen, {IImageShareParams} from '../views/imageShare';
import SettingScreen, {ISettingParams} from '../views/setting/setting';
import {Button, Image} from 'react-native'
import Store, { IStoreParams } from '../views/store/store';

export type TStackParamList = {
    Home: IHomeParams;
    Details: IDetailParams;
    Post: IPostParams;
    AddPost: IAddPostParams;
    ImageShare: IImageShareParams;
    Setting:ISettingParams;
    Store: IStoreParams;
}

const Stack = createStackNavigator<TStackParamList>();

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('../assets/react-native-logo.png')}
    />
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        title: 'View',
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerTitle: ()=>(<LogoTitle />),
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
        }}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={{title:'Details'}}
        initialParams={{itemId:0}}
        />
        <Stack.Screen name='Post' component={PostScreen} options={{title:'Post'}} />
        <Stack.Screen name='AddPost' component={AddPostScreen} options={{title:'Add Post'}} />
        <Stack.Screen name='ImageShare' component={ImageShareScreen} 
        options={({route})=>({title: route.params.title})} 
        />
        <Stack.Screen name='Setting' component={SettingScreen} options={{title:'Setting'}} />
        <Stack.Screen name='Store' component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}