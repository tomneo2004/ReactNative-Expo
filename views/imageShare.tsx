import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import uploadToAnonymousFilesAsync from 'anonymous-files'; 
import Logo from '../components/Logo';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import { TStackParamList } from '../navigation/navigation';

export interface IImageShareParams {
  title: string;
}

interface IImageShareProps extends StackScreenProps<TStackParamList, 'ImageShare'>{}

const ImageShare = (props:IImageShareProps) => {
    const {
      navigation,
      route,
    } = props;

    const [selectedImage, setSelectedImage] = React.useState<{[key:string]:string} | null>(null);

    let openImagePickerAsync = async ()=>{
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
      if(permissionResult.granted === false){
        alert("Permission to access camera roll is required!");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      
      if(pickerResult.cancelled === true) return;
  
      if(Platform.OS === 'web'){
        let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
        setSelectedImage({localUri: pickerResult.uri, remoteUri});
      }
      else{
        setSelectedImage({localUri: pickerResult.uri, remoteUri:null});
      }
    }
  
    let openShareDialogAsync = async ()=>{
      if(!await Sharing.isAvailableAsync()){
        alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
        return;
      }
  
      await Sharing.shareAsync(selectedImage.localUri);
    }
  
    const clearImage = ()=>{
      setSelectedImage(null);
    }
  
    if(selectedImage !== null){
      return (
        <View style={styles.container}>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
          <Text style={styles.instruction}>
          To share a photo from your phone with a friend, just press the button below!
          </Text>
          <Button title='Pick a photo' onPress={openImagePickerAsync} />
          <Button title='Share this photo' onPress={openShareDialogAsync} />
          <Button title='Clear the image' onPress={clearImage} />
          <StatusBar style="auto" />
        </View>
      )
    }
  
    return (
      <View style={styles.container}>
        {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} /> */}
        <Logo title={Constants.manifest.extra.logoTitle}/>
        <Text style={styles.instruction}>
          To share a photo from your phone with a friend, just press the button below!
        </Text>
        <Button title='Pick a photo' onPress={openImagePickerAsync} />
        <Button title='Update title' 
          onPress={()=>{
            navigation.setOptions({title: `[${route.params.title}]`})
          }} 
          />
        <StatusBar style="auto" />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width: 305, 
      height: 159,
      marginBottom: 10,
    },
    instruction:{
      color:'#888',
      fontSize:18,
      marginHorizontal: 15,
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain'
    }
  });

export default ImageShare;