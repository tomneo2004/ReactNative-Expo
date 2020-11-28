import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import React from 'react';

export interface IProps extends StatusBarProps {}

const FocusAwareStatusBar = (props:IProps) => {
    const isFocus = useIsFocused();

    return isFocus?<StatusBar {...props} />:null;
};

export default FocusAwareStatusBar;