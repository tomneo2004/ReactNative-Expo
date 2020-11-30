import { useNavigation, useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { TStackParamList } from '../navigation/navigation';

export interface IPostParams{
    postTitle?:string;
}

interface IPostProps extends StackScreenProps<TStackParamList, 'Post'>{}

const renderPostTitle = (title:string)=>{
    if(!title) return null;

    return (
        <Text>Title: {title}</Text>
    )
}
const Post = (props:IPostProps) => {
    const {
        route
    } = props;

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Create a new post</Text>
            {route.params?renderPostTitle(route.params.postTitle):null}
            <Button title='Create Post' onPress={()=>navigation.navigate('AddPost')} />
        </SafeAreaView>
    );
};

export default Post;