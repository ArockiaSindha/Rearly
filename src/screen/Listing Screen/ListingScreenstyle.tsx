import { StyleSheet } from "react-native";

export const ListingScreenstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
      },
      searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        paddingVertical:'4%',
        backgroundColor: '#f8f8f8',
        //borderBottomWidth: 1,
        //borderBottomColor: '#E0E0E0',
      },
      searchInput: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        color:'black',
        borderColor: '#ddd',
        backgroundColor:'rgba(217, 217, 217, 0.4)',
        borderRadius: 1,
        paddingLeft: '10%',
        //paddingVertical: 5,
        //paddingHorizontal: 5,
      },
      searchIcon:{
        position: 'absolute',
        left:25,
        alignItems:'center',
      },
      filterContainer:{
        justifyContent: 'center',
        alignItems: 'center',
       // marginLeft: 10,
        padding: 13,
        paddingLeft:'15%',
        borderWidth: 1,
        backgroundColor:'rgba(90, 128, 253, 0.75)',
        borderColor: 'rgba(90, 128, 253, 0.75)',
        borderRadius: 1,
      },
      filterIcon: {
        width: 25,
        height: 20,
        right:20,
      },
      listingCard: {
       // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 2,
        //paddingHorizontal: '6%',
        margin: 5,
        padding: 15,
        paddingVertical:'5%',
        //elevation: 5,
      },
      listingImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
      },
      listingInfo: {
        flex: 1,
        marginLeft: 16,
      },
      listingTitle: {
        fontSize: 14,
        color:'#000000',
        fontFamily:'Outfit-Regular'
        //fontWeight: 'bold',
      },
      listingPrice: {
        fontSize: 14,
        //padding:'2%',
        fontFamily:'Outfit-Bold',
        color: '#000000',
      },
      locationContainer: {
        flexDirection: 'row',
      },
      locationImage: {
        width: 20,
        height: 20,
        alignItems:'flex-end',
      },
      listingLocation: {
        fontSize: 14,
        fontFamily:'Outfit-Regular',
        color: '#000000',
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
      },
      buyNowButton: {
        paddingVertical: 9,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(90, 128, 253, 0.75)',
        borderRadius: 3,
        marginRight: 8,
      },
      moreInfoButton: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderWidth: 3,
        borderColor: 'rgba(90, 128, 253, 0.75)',
        //backgroundColor: '#4CAF50',
        //borderColor:'#5A80FD',
        borderRadius: 4,
      },
      buttonText: {
        color: 'rgba(255, 255, 255, 1)',
        //fontWeight: "bold",
        fontFamily:'DMSans-SemiBold'
      },
      MIB:{
        borderColor: '#5A80FD',
        fontWeight: 'bold',
        fontFamily:'DMSans-SemiBold',
        color:'rgba(90, 128, 253, 1)',
      }
    });
    