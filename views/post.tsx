import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
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
        route,
        navigation
    } = props;

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Create a new post</Text>
            {route.params?renderPostTitle(route.params.postTitle):null}
            <Button title='Create Post' onPress={()=>navigation.navigate('AddPost')} />
        </View>
    );
};

export default Post;