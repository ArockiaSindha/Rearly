import React from "react";
import {  Image, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Appbar, Button, Menu, Text, TextInput } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CreateNewAnimalstyle } from "./CreateNewAnimalstyle";
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const CreateAnimalScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [image, setImage] = React.useState<any>(null);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [animalType, setAnimalType] = React.useState('');
  const [ageMenuVisible, setAgeMenuVisible] = React.useState(false);
  const [animalAge, setAnimalAge] = React.useState('');
  const [genderMenuVisible, setGenderMenuVisible] = React.useState(false);
  const [animalGender, setAnimalGender] = React.useState('');

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };
  const handleImageRemove = () => {
    setImage(null);
  };
  
  return (
      <SafeAreaView style={CreateNewAnimalstyle.container}>
        <Appbar.Header  style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
          <Appbar.BackAction onPress={() => navigation.goBack()} color='#000000'/>
          <Appbar.Content
           title="Create New Animal" 
           titleStyle={{ fontFamily: 'DMSans_24pt-Medium', fontSize: 24, color:'#000000' }}/>
        </Appbar.Header>
        
        <ScrollView contentContainerStyle={CreateNewAnimalstyle.scrollViewContent}>
        <View style={CreateNewAnimalstyle.formContainer}>
        <View style={CreateNewAnimalstyle.inputWrapper}>

         <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                  <TouchableOpacity onPress={() => setMenuVisible(true)} >
                    <TextInput
                      label={<Text style={CreateNewAnimalstyle.label}>Goat/Sheep</Text>}
                      value={animalType}
                      style={CreateNewAnimalstyle.input}
                      editable={false}
                      right={<TextInput.Icon icon="menu-down" />}
                    />
                  </TouchableOpacity>
                }
                contentStyle={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
                <Menu.Item onPress={() => { setAnimalType('Goat'); setMenuVisible(false); }} title="Goat" titleStyle={{color:'#000000'}}/>
                <Menu.Item onPress={() => { setAnimalType('Sheep'); setMenuVisible(false); }} title="Sheep" titleStyle={{color:'#000000'}}/>
              </Menu>
              
          <TextInput label={<Text style={CreateNewAnimalstyle.label}>Weight of Animal</Text>} 
          style={CreateNewAnimalstyle.input} />

          <Menu
              visible={ageMenuVisible}
              onDismiss={() => setAgeMenuVisible(false)}
              anchor={
                <TouchableOpacity onPress={() => setAgeMenuVisible(true)}>
                  <TextInput
                    label={<Text style={CreateNewAnimalstyle.label}>Age of Animal</Text>}
                    value={animalAge}
                    style={CreateNewAnimalstyle.input}
                    editable={false}
                    right={<TextInput.Icon icon="menu-down" />}
                  />
                </TouchableOpacity>
              }
              contentStyle={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
              <Menu.Item onPress={() => { setAnimalAge('1 year'); setAgeMenuVisible(false); }} title="1 year" titleStyle={{ color: '#000000'}} />
              <Menu.Item onPress={() => { setAnimalAge('2 years'); setAgeMenuVisible(false); }} title="2 years" titleStyle={{ color: '#000000'}} />
              <Menu.Item onPress={() => { setAnimalAge('3 years'); setAgeMenuVisible(false); }} title="3 years" titleStyle={{ color: '#000000'}} />
             </Menu>

          <Menu
              visible={genderMenuVisible}
              onDismiss={() => setGenderMenuVisible(false)}
              anchor={
                <TouchableOpacity onPress={() => setGenderMenuVisible(true)}>
                  <TextInput
                    label={<Text style={CreateNewAnimalstyle.label}>Gender</Text>}
                    value={animalGender}
                    style={CreateNewAnimalstyle.input}
                    editable={false}
                    right={<TextInput.Icon icon="menu-down" />}
                  />
                </TouchableOpacity>
              }
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
               <Menu.Item onPress={() => { setAnimalGender('Male'); setGenderMenuVisible(false); }} title="Male" titleStyle={{ color: '#000000' }} />
               <Menu.Item onPress={() => { setAnimalGender('Male'); setGenderMenuVisible(false); }} title="Female" titleStyle={{ color: '#000000' }} />
               </Menu>
               
          <TextInput label={<Text style={CreateNewAnimalstyle.label}>About the Animal</Text>}
           style={CreateNewAnimalstyle.input} />

          </View>
           <Text onPress={handleImagePicker} style={CreateNewAnimalstyle.UI}>
            Upload Image (Optional)
          </Text>
          {image &&  (
            <View style={CreateNewAnimalstyle.imageContainer}>
            <Image source={{ uri: image }} style={CreateNewAnimalstyle.imagePreview} />
            <TouchableOpacity onPress={handleImageRemove} style={CreateNewAnimalstyle.removeImageButton}>
                <Icon name="delete" size={24} color="rgba(0, 0, 0, 1)" />
              </TouchableOpacity>
            </View>
          )}
         
          <Button  onPress={() => {}} style={CreateNewAnimalstyle.button}>
          <Text style={CreateNewAnimalstyle.buttontext} > Create Animal </Text>
          </Button>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
};
export default CreateAnimalScreen;