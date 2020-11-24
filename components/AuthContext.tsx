import React from 'react';

export const Auth = React.createContext({isSignin:false})

interface IAuthContextProps {
    children: React.ReactElement;
}
const AuthContext = (props:IAuthContextProps) => {
    const {children} = props;
    return (
        <Auth.Provider value={{isSignin:false}}>
            {children}
        </Auth.Provider>
    );
};

export default AuthContext;