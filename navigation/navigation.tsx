import * as React from 'react';
import { NavigationContainer, NavigationContainerProps, NavigationContainerRef, DefaultTheme,  } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen, {IHomeParams} from '../views/home';
import DetailsScreen, {IDetailParams} from '../views/detail';
import PostScreen, {IPostParams} from '../views/post';
import AddPostScreen, {IAddPostParams} from '../views/addPost';
import ImageShareScreen, {IImageShareParams} from '../views/imageShare';
import SettingScreen, {ISettingParams} from '../views/setting/setting';
import SigninScreen, {ISigninParams} from '../views/user/signin';
import {Image, View, Text} from 'react-native';
import {Button as RNButton} from 'react-native';
import Store, { IStoreParams } from '../views/store/store';
import { AuthContext } from '../components/Auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Link from './links';
import { Overlay, Button } from 'react-native-elements';
// import * as Linking from 'expo-linking';

// const prefix = Linking.makeUrl('/');


export type TStackParamList = {
    Home: IHomeParams;
    Details: IDetailParams;
    Post: IPostParams;
    AddPost: IAddPostParams;
    ImageShare: IImageShareParams;
    Setting:ISettingParams;
    Store: IStoreParams;
    Signin: ISigninParams;
    NotFound: {};
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
        <Stack.Screen name='NotFound' component={SettingScreen} />
      </React.Fragment>
    )
  }

  return (
    <Stack.Screen name='Signin' component={SigninScreen} options={{title:'Sign in'}} />
  )
}

function rightBarButtons(){
  return (
    <View>
      <RNButton
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
      />
    </View>
  )
}

export default function Navigation() {

  const auth = React.useContext(AuthContext);
  const routeNameRef = React.useRef<string>();
  const navRef = React.useRef<NavigationContainerRef>();
  const [overlayVisible, setOverlayVisible] = React.useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <Overlay 
      isVisible={overlayVisible} 
      onBackdropPress={()=>setOverlayVisible(false)}
      animationType='fade'
      backdropStyle={{backgroundColor:'rgba(25,25,25,0.8)'}}
      >
        <React.Fragment>
          <Text>Hello from Overlay!</Text>
          <Button title='Close' onPress={()=>setOverlayVisible(false)} />
        </React.Fragment>
      </Overlay>
      <NavigationContainer 
      ref={navRef}
      theme={DefaultTheme} 
      linking={Link}
      onReady={()=>routeNameRef.current = navRef.current.getCurrentRoute().name}
      onStateChange={()=>{
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // The line below uses the expo-firebase-analytics tracker
          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
          // Change this line to use another Mobile analytics SDK
          // Analytics.setCurrentScreen(currentRouteName, currentRouteName);
          alert(`The route changed to ${currentRouteName} from ${previousRouteName}`);
        }

        routeNameRef.current = currentRouteName;
      }}
      >
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          title: 'View',
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',},
          headerTitle: ()=>(<LogoTitle />),
          headerRight: ()=>{
            return (
              <View>
                <RNButton
                      onPress={()=>setOverlayVisible(true)}
                      title="Info"
                      color="#fff"
                />
              </View>
            )
          },
          }}>
          {routing(auth.isSignin)}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}