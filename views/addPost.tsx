import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../components/Button';
import { TStackParamList } from '../navigation/navigation';

export interface IAddPostProps {}

type TAddPostProps = StackScreenProps<TStackParamList, 'AddPost'>;

const AddPost = (props:TAddPostProps) => {
    const {
        navigation
    } = props;
    const [title, setTitle] = React.useState<string>('');

    const handleTitleChange = (text:string)=>{
        setTitle(text);
    }

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Add post</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, alignSelf:'stretch'}} 
            value={title} onChangeText={handleTitleChange} 
            />
            <Button title='Add Post' onPress={()=>navigation.navigate('Post', {postTitle:title})} />
        </View>
    );
};

export default AddPost;