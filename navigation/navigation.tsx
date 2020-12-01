import * as React from 'react';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen, {IHomeParams} from '../views/home';
import DetailsScreen, {IDetailParams} from '../views/detail';
import PostScreen, {IPostParams} from '../views/post';
import AddPostScreen, {IAddPostParams} from '../views/addPost';
import ImageShareScreen, {IImageShareParams} from '../views/imageShare';
import SettingScreen, {ISettingParams} from '../views/setting/setting';
import SigninScreen, {ISigninParams} from '../views/user/signin';
import {Button, Image} from 'react-native'
import Store, { IStoreParams } from '../views/store/store';
import { AuthContext } from '../components/Auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';

const prefix = Linking.makeUrl('/');


export type TStackParamList = {
    Home: IHomeParams;
    Details: IDetailParams;
    Post: IPostParams;
    AddPost: IAddPostParams;
    ImageShare: IImageShareParams;
    Setting:ISettingParams;
    Store: IStoreParams;
    Signin: ISigninParams;
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

function routing(isSignin:boolean){
  if(isSignin){
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }

  return (
    <Stack.Screen name='Signin' component={SigninScreen} options={{title:'Sign in'}} />
  )
}

export default function Navigation() {

  console.log('link url',prefix);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        //Details screen handle uri /item and accpte param itemId in uri
        Details: '/item/:itemId'
      },
    },
  };

  const auth = React.useContext(AuthContext);

  return (
    <SafeAreaProvider>
    <NavigationContainer linking={linking}>
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
        {routing(auth.isSignin)}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}