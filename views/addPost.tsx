import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button';
import { TStackParamList } from '../navigation/navigation';

export interface IAddPostParams {}

interface IAddPostProps extends StackScreenProps<TStackParamList, 'AddPost'>{}

const AddPost = (props:IAddPostProps) => {
    const {
        navigation
    } = props;
    const [title, setTitle] = React.useState<string>('');

    const handleTitleChange = (text:string)=>{
        setTitle(text);
    }

    return (
        <ScrollView style={{flex:1}} alwaysBounceVertical={false}>
            <Card 
            containerStyle={{width:'90%', borderRadius:5}}
            wrapperStyle={{padding:'5%'}}
            >
                <Card.Title>Add post</Card.Title>
                <Card.Divider />
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, alignSelf:'stretch'}} 
                value={title} onChangeText={handleTitleChange} 
                />
                <Button title='Create' onPress={()=>navigation.navigate('Post', {postTitle:title})} />
            </Card>
        </ScrollView>
    );
};

export default AddPost;