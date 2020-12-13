import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {TTabeParamList} from './setting';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { LinearGradient } from 'react-native-linear-gradient';

export interface IProfileParams {
    username: string;
}

type  IProfileProps = BottomTabScreenProps<TTabeParamList, 'Profile'>

const Profile = (props:IProfileProps) => {
    const {
        route,
    } = props;

    const [showMenu, setShowMenu] = React.useState<boolean>(false);

    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
          title: 'Cancel',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          onPress: () => setShowMenu(false),
        },
      ];

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <FocusAwareStatusBar style="dark" backgroundColor="#ecf0f1" />
            <Text>This is profile screen</Text>
            <Text>{route.params.username}</Text>
            <Button 
            title='Bottom Menu'
            raised
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
                colors: ['red', 'pink'],
                start: { x: 1, y: 0.3 },
                end: { x: 1, y: 1 },
            }}
            onPress={()=>setShowMenu(true)}
            />
            <BottomSheet isVisible={showMenu} modalProps={{
                animationType:'slide',
            }}>
            {list.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                    <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
            </BottomSheet>
        </SafeAreaView>
    );
};

export default Profile;