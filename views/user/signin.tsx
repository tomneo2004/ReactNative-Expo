import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import { AuthContext } from '../../components/Auth';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export interface ISigninParams {}

const Signin = () => {
    const authContext = useContext(AuthContext);
    const inset = useSafeAreaInsets();

    return (
        <SafeAreaView style={{
            flex:1, 
            justifyContent:'space-between', 
            alignItems:'center',
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
        }}>
            <Button title='Sign In' onPress={()=>authContext.signin()}/>
            <Text>Click sign in</Text>
        </SafeAreaView>
    );
};

export default Signin;