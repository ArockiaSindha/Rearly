import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Appbar, Button, Text } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { animalProSrcstyle } from "./AnimalProSrcstyle";
import DatePicker from 'react-native-date-picker';

const AnimalProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  
  return (
    <SafeAreaView style={animalProSrcstyle.container}>
      <Appbar.Header style={animalProSrcstyle.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color='#000000' />
        <Appbar.Content
          title="Animal Profile"
          titleStyle={animalProSrcstyle.headerTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={animalProSrcstyle.scrollViewContent}>
        <Image
          source={require('../../assets/Images/Goat3.png')}
          style={animalProSrcstyle.image}
          resizeMode="cover"
        />
        
        <View style={animalProSrcstyle.descriptionContainer}>
          <View style={animalProSrcstyle.PC}>
          <Text variant="titleLarge" style={animalProSrcstyle.sectionTitle}>Description</Text>
          <View style={animalProSrcstyle.pickerContainer}>
            <TouchableOpacity onPress={() => setOpen(true)} style={animalProSrcstyle.pickerButton}>
              <Text style={animalProSrcstyle.pickerButtonText}>
                {date.toLocaleDateString('en-US', { month: 'long', year: '2-digit'})}
              </Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          </View>
          <View style={animalProSrcstyle.descriptionDetails}>
            <View style={animalProSrcstyle.descriptionItem}>
              <Text variant="bodyMedium" style={animalProSrcstyle.text}>Breed</Text>
              <Text variant="bodyLarge" style={animalProSrcstyle.descriptionValue}>Sheep</Text>
            </View>
            <View style={animalProSrcstyle.descriptionItem}>
              <Text variant="bodyMedium" style={animalProSrcstyle.text}>Age</Text>
              <Text variant="bodyLarge" style={animalProSrcstyle.descriptionValue}>4</Text>
            </View>
            <View style={animalProSrcstyle.descriptionItem}>
              <Text variant="bodyMedium" style={animalProSrcstyle.text}>Gender</Text>
              <Text variant="bodyLarge" style={animalProSrcstyle.descriptionValue}>Male</Text>
            </View>
            <View style={animalProSrcstyle.descriptionItem}>
              <Text variant="bodyMedium" style={animalProSrcstyle.text}>Weight</Text>
              <Text variant="bodyLarge" style={animalProSrcstyle.descriptionValue}>32 Kgs</Text>
            </View>
          </View>

          <Text variant="titleLarge" style={animalProSrcstyle.sectionTitle}>Weights</Text>
          <View style={animalProSrcstyle.weightsContainer}>
            <TouchableOpacity style={animalProSrcstyle.weightItem}>
              <Text variant="bodyLarge" style={animalProSrcstyle.value}>12:00 PM</Text>
              <Text variant="bodyLarge" style={animalProSrcstyle.weightValue}>21 Kgs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={animalProSrcstyle.weightItem}>
              <Text variant="bodyLarge" style={animalProSrcstyle.value}>15:00 PM</Text>
              <Text variant="bodyLarge" style={animalProSrcstyle.weightValue}>22 Kgs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={animalProSrcstyle.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={animalProSrcstyle.buttonContainer}>
            <Button  onPress={() => {}} style={animalProSrcstyle.markButton}>
              <Text style={animalProSrcstyle.MarkText}>Mark</Text>
            </Button>
            <Button onPress={() => {}} style={animalProSrcstyle.editButton}>
              <Text style={animalProSrcstyle.buttonText}>Edit</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimalProfileScreen;
