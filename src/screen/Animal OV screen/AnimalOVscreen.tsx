import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { AnimalOVscreenstyle } from './AnimalOVscreenstyle';
import { ScrollView } from 'react-native-gesture-handler';

const AnimalOverviewScreen = ({ navigation }:{navigation:any}) => {

  const handleBackPress = () => {
     navigation.goBack();
  };

  const handleNextPagePress = () => {
    navigation.navigate('AnimalProSrc');
};
  return (
    <SafeAreaView style={AnimalOVscreenstyle.container}>
      
       <Appbar.Header style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
        <Appbar.BackAction onPress={handleBackPress} color='#000000'/>
        <Appbar.Content 
        title="Animal Overview"
        titleStyle={{fontFamily: 'DMSans_24pt-Medium',color:'#000000',fontSize: 24}} />
      </Appbar.Header>

     
        <Image
          source={require('../../assets/Images/Goat2.png')}
          style={AnimalOVscreenstyle.animalImage}
        /> 
        <ScrollView style={{height:500}}>
        <View style={AnimalOVscreenstyle.detailsContainer}>
          <View style={AnimalOVscreenstyle.header}>
            <Text style={AnimalOVscreenstyle.animalTitle}>White Goat</Text>
            <TouchableOpacity style={AnimalOVscreenstyle.infoButton}>
              <Text style={AnimalOVscreenstyle.infoButtonText}>Info.</Text>
            </TouchableOpacity>
          </View>

          <View style={AnimalOVscreenstyle.infoRow}>
            <View style={AnimalOVscreenstyle.infoItem}>
              <Text style={AnimalOVscreenstyle.infoLabel}>Weight</Text>
              <Text style={AnimalOVscreenstyle.infoValue}>21 Kgs</Text>
            </View>
            <View style={AnimalOVscreenstyle.infoItem}>
              <Text style={AnimalOVscreenstyle.infoLabel}>Gender</Text>
              <Text style={AnimalOVscreenstyle.infoValue}>Male</Text>
            </View>
            <View style={AnimalOVscreenstyle.infoItem}>
              <Text style={AnimalOVscreenstyle.infoLabel}>Age</Text>
              <Text style={AnimalOVscreenstyle.infoValue}>3</Text>
            </View>
          </View>

          <View style={AnimalOVscreenstyle.descriptionContainer}>
            <Text style={AnimalOVscreenstyle.descriptionLabel}>Description</Text>
            <Text style={AnimalOVscreenstyle.descriptionText}>
              This 21 kg male white goat hails from Rearly Farm and boasts an excellent inheritance record.
            </Text>
          </View>
          <View style={AnimalOVscreenstyle.Us}>
          <Button mode="contained" style={AnimalOVscreenstyle.updateButton}>
           <Text style={AnimalOVscreenstyle.Us}> Update Status </Text>
          </Button>
          </View>
          <View style={AnimalOVscreenstyle.rfs}>
          <Button mode="outlined" style={AnimalOVscreenstyle.salesButton}>
            <Text style={AnimalOVscreenstyle.rfs}>Ready for Sales</Text>
          </Button>
          </View>
          <View style={AnimalOVscreenstyle.nextPageButtonContainer}>
          <Button  onPress={handleNextPagePress}>
            <Text style={AnimalOVscreenstyle.nextPageButtonText}>Next Page</Text>
          </Button>
         </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};
export default AnimalOverviewScreen;