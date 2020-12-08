import * as React from 'react';
import AuthWrapper from './components/Auth';
import Navigation from './navigation/navigation';
import './i18n';
import {enableScreens} from 'react-native-screens';
enableScreens();//enable native screen

export default function App() {
  return (
    <AuthWrapper>
        <Navigation />
    </AuthWrapper>
  )
}
