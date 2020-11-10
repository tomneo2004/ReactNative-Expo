import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import Button from './Button';
// import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import uploadToAnonymousFilesAsync from 'anonymous-files'; 
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync()
// .then(()=>setTimeout(async ()=> await SplashScreen.hideAsync(), 5000))
// .catch(err=>console.log(err));


export default function App() {
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
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />
      <Text style={styles.instruction}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <Button title='Pick a photo' onPress={openImagePickerAsync} />
      <StatusBar style="auto" />
    </View>
  );
}

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
