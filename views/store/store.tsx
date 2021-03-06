import React from 'react';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationOptions, DrawerScreenProps} from '@react-navigation/drawer';
import StoreHome, { IStoreHomeParams } from './storeHome';
import Book, { IBookParams } from './book';
import { DrawerActions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export interface IStoreParams {}

export type TDrawerParamList = {
    StoreHome: IStoreHomeParams;
    Book: IBookParams;
}

interface ICustomDrawerProps extends DrawerContentComponentProps{}

const options: DrawerNavigationOptions = {
    headerShown: true,
}

const CustomDrawer = (props:ICustomDrawerProps)=>{
    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem 
            label='Toggle drawer'
            onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator<TDrawerParamList>();

const Store = () => {
    return (
        <SafeAreaProvider>
        <Drawer.Navigator initialRouteName='StoreHome' drawerPosition='right' drawerContent={props=><CustomDrawer {...props} />}>
            <Drawer.Screen name='StoreHome' component={StoreHome} options={options} />
            <Drawer.Screen name='Book' component={Book} initialParams={{bookName:'One day', bookId:188909}} />
        </Drawer.Navigator>
        </SafeAreaProvider>
    );
};

export default Store;