import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
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
    const [tos, setTOS] = React.useState<boolean>(false);

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
                <CheckBox
                containerStyle={{
                    backgroundColor:'transparent', 
                    borderColor:'transparent',
                    marginLeft:0,
                    paddingLeft:0,
                }} 
                checked={tos}
                title='Term of Service'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                onIconPress={()=>setTOS(state=>!state)}
                />
                {
                    !tos?null
                    :
                    <Button title='Create' onPress={()=>navigation.navigate('Post', {postTitle:title})} />
                }
            </Card>
        </ScrollView>
    );
};

export default AddPost;