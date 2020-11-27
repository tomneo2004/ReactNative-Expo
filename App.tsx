import * as React from 'react';
import AuthWrapper from './components/Auth';
import Navigation from './navigation/navigation';

export default function App() {
  return (
    <AuthWrapper>
        <Navigation />
    </AuthWrapper>
  )
}
