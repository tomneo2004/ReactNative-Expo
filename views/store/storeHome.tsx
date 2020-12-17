import { DrawerScreenProps, useIsDrawerOpen } from '@react-navigation/drawer';
import {TDrawerParamList} from './store';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import CButton from '../../components/Button';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { PricingCard } from 'react-native-elements';

export interface IStoreHomeParams {}

interface IStoreHomeProps extends DrawerScreenProps<TDrawerParamList, 'StoreHome'>{}

const StoreHome = (props:IStoreHomeProps) => {
    const isDrawerOpen = useIsDrawerOpen();
    const {t} = useTranslation();

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style='inverted' backgroundColor='#000' />
            <Text>Store Home</Text>
            <Text>Swipe left to show menu</Text>
            <Text>Drawer open: {isDrawerOpen?'true':'false'}</Text>
            <CButton title='EN' onPress={()=>i18n.changeLanguage('en')} />
            <CButton title='FR' onPress={()=>i18n.changeLanguage('fr')} />
            <Text>{t('foo')}</Text>
            <PricingCard 
            color="#4f9deb"
            title='Membership'
            price="$40 / Month"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'book' }}
            pricingStyle={{fontSize:20}}
            containerStyle={{borderRadius:5}}
            />
        </SafeAreaView>
        
    );
};

export default StoreHome;