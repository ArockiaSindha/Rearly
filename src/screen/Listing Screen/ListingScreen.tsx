import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, StatusBar } from "react-native";
import { ListingScreenstyle } from "./ListingScreenstyle";

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
  return (
    <View style={ListingScreenstyle.container}>
      <StatusBar barStyle='light-content' />
      <View style={ListingScreenstyle.header}>
           
        <Text style={ListingScreenstyle.headerTitle}>Listings</Text>
      </View>
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
                  <TouchableOpacity style={ListingScreenstyle.moreInfoButton}>
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