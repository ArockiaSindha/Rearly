import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { ListingScreenstyle } from "./ListingScreenstyle";
import { Appbar, Menu } from 'react-native-paper';
import { useNavigation,NavigationProp } from '@react-navigation/native';

const listings = [
  {
    id: '1',
    title: 'White Goat for live',
    price: 'Rs 5000/Piece',
    location: 'RT Farms, Madurai',
    image: require('../../assets/Images/Goat1.png'),
    locationimage: require('../../assets/Images/image.png')
  },
  {
    id: '2',
    title: 'White Goat for live',
    price: 'Rs 5000/Piece',
    location: 'RT Farms, Madurai',
    image: require('../../assets/Images/Goat1.png'),
    locationimage: require('../../assets/Images/image.png')
  },
  {
    id: '3',
    title: 'White Goat for live',
    price: 'Rs 5000/Piece',
    location: 'RT Farms, Madurai',
    image: require('../../assets/Images/Goat1.png'),
    locationimage: require('../../assets/Images/image.png')
  },
  {
    id: '4',
    title: 'White Goat for live',
    price: 'Rs 5000/Piece',
    location: 'RT Farms, Madurai',
    image: require('../../assets/Images/Goat1.png'),
    locationimage: require('../../assets/Images/image.png')
  },
];

const ListingScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMoreInfoPress = () => {
    navigation.navigate('AnimalOVscreen');
  };
   
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleCreateNewAnimalPress = () => {
    navigation.navigate('CreateNA'); 
    closeMenu();
  };
  const handleGradingScreenPress = () => {
    navigation.navigate('GradingSrc'); 
    closeMenu();
  };

  return (
    <View style={ListingScreenstyle.container}>
      <Appbar.Header style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
    <Appbar.BackAction onPress={() =>navigation.goBack()} color='#000000' />
    <Appbar.Content
      title="Listings"
      titleStyle={{ fontFamily: 'DMSans_24pt-Medium', fontSize: 24, color:'#000000' }}
    />
    <Menu
       visible={menuVisible}
       onDismiss={closeMenu}
       anchor={<Appbar.Action icon="dots-vertical" color="#000000" onPress={openMenu} />}
       contentStyle={{backgroundColor:'rgba(255, 255, 255, 1)'}}
       >
        <Menu.Item onPress={handleCreateNewAnimalPress} title="Create New Animal" titleStyle={{color:'#000000'}} />
        <Menu.Item onPress={handleGradingScreenPress} title="Grading Screen" titleStyle={{color:'#000000'}} />
        <Menu.Item onPress={() => {}} title="Transactions" titleStyle={{color:'#000000'}} />
    </Menu>
  </Appbar.Header>
      <View style={ListingScreenstyle.searchSection}>
        <Image
          source={require('../../assets/Images/Search.png')}
          style={ListingScreenstyle.searchIcon} />
        <TextInput
          style={ListingScreenstyle.searchInput}
          placeholder="Search.."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={ListingScreenstyle.filterContainer}>
          <Image
            source={require('../../assets/Images/Filter.png')}
            style={ListingScreenstyle.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={ListingScreenstyle.listingCard}>
            <Image source={item.image} style={ListingScreenstyle.listingImage} />
            <View style={ListingScreenstyle.listingInfo}>
              <Text style={ListingScreenstyle.listingTitle}>{item.title}</Text>
              <Text style={ListingScreenstyle.listingPrice}>{item.price}</Text>
              <View style={ListingScreenstyle.locationContainer}>
                <Text style={ListingScreenstyle.listingLocation}>{item.location}</Text>
                <Image source={item.locationimage} style={ListingScreenstyle.locationImage} />
              </View>
              <View style={ListingScreenstyle.buttonContainer}>
                <TouchableOpacity style={ListingScreenstyle.buyNowButton}>
                  <Text style={ListingScreenstyle.buttonText}>Buy Now</Text>
                </TouchableOpacity>
                <View style={ListingScreenstyle.MIB}>
                  <TouchableOpacity 
                  style={ListingScreenstyle.moreInfoButton}
                  onPress={handleMoreInfoPress}
                  >
                  <Text style={ListingScreenstyle.MIB}>More Info</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default ListingScreen;