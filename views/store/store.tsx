import React from 'react';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerScreenProps} from '@react-navigation/drawer';
import StoreHome, { IStoreHomeParams } from './storeHome';
import Book, { IBookParams } from './book';
import { DrawerActions } from '@react-navigation/native';

export interface IStoreParams {}

export type TDrawerParamList = {
    Home: IStoreHomeParams;
    Book: IBookParams;
}

interface ICustomDrawerProps extends DrawerContentComponentProps{}

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
        <Drawer.Navigator drawerPosition='right' drawerContent={props=><CustomDrawer {...props} />}>
            <Drawer.Screen name='Home' component={StoreHome} />
            <Drawer.Screen name='Book' component={Book} />
        </Drawer.Navigator>
    );
};

export default Store;