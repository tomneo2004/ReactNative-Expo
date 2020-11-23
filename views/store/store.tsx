import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StoreHome, { IStoreHomeParams } from './storeHome';
import Book, { IBookParams } from './book';

export interface IStoreParams {}

export type TDrawerParamList = {
    Home: IStoreHomeParams;
    Book: IBookParams;
}

const Drawer = createDrawerNavigator<TDrawerParamList>();

const Store = () => {
    return (
        <Drawer.Navigator drawerPosition='right'>
            <Drawer.Screen name='Home' component={StoreHome} />
            <Drawer.Screen name='Book' component={Book} />
        </Drawer.Navigator>
    );
};

export default Store;