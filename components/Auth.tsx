import React from 'react';

export const AuthContext = React.createContext({
    isSignin:false,
    signin:()=>{},
    signout:()=>{},
  })

interface IAuthWrapperProps {
    children:React.ReactElement;
  }

const AuthWrapper = (props:IAuthWrapperProps)=>{
    const {children} = props;
    const [authorized, setAuthorized] = React.useState<boolean>(false);

    return (
        <AuthContext.Provider value={{
        isSignin: authorized,
        signin: ()=>setAuthorized(true),
        signout: ()=>setAuthorized(false)
        }}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthWrapper;