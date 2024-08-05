import { StyleSheet } from "react-native";

export const AnimalOVscreenstyle = StyleSheet.create({
    container: {
      flex: 1,
      //height:'100%',
      backgroundColor: '#f8f8f8',
      
    },
    contentContainer: {
      flex:1,
      //padding:5,
      borderWidth:1,
      borderColor:'black',
    },
    animalImage: {
      width: '90%',
      height: '40%',
      resizeMode: 'contain',
      //marginBottom: 20,
    },
    detailsContainer: {
      backgroundColor: '#fff',
      borderRadius: 2,
      padding: 20,
      paddingVertical:'8%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //marginBottom: 20,
    },
    animalTitle: {
      fontSize: 32,
      color:'rgba(0, 0, 0, 1)',
      fontFamily:'DMSans_18pt-Bold'
    },
    infoButton: {
      backgroundColor: 'rgba(90, 128, 253, 1)',
      borderRadius: 15,
      paddingHorizontal: 16,
      paddingVertical: 5,
    },
    infoButtonText: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 14,
      fontFamily:'DMSans-Regular'
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:'3%'
      //marginBottom: 20,
    },
    infoItem: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderRightColor: 'rgba(0, 0, 0, 0.25)',
      paddingBottom: '4%',
      borderBottomColor:'rgba(0, 0, 0, 0.25)',
    },
    infoLabel: {
      fontSize: 16,
      color: 'rgba(0, 0, 0, 1)',
      fontFamily:'DMSans-Regular'
    },
    infoValue: {
      fontSize: 20,
      fontFamily:'DMSans-SemiBold',
      color: 'rgba(0, 0, 0, 1)'
    },
    descriptionContainer: {
      padding: '3%',
    },
    descriptionLabel: {
      fontSize: 16,
      fontFamily:'DMSans-SemiBold',
      marginBottom: 5,
      color:'rgba(0, 0, 0, 1)'
    },
    descriptionText: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.64)',
      fontFamily:'DMSans-Regular'
    },
    updateButton: {
      backgroundColor: 'rgba(90, 128, 253, 1)',
      borderRadius: 2,
      paddingVertical:'1%'
    },
    salesButton: {
      borderColor: 'rgba(90, 128, 253, 1)',
      borderRadius: 2,
      paddingVertical:'1%'
    },
    rfs:{
      paddingVertical: '4%',
      borderColor: 'rgba(90, 128, 253, 1)',
      color:'rgba(90, 128, 253, 1)',
      fontSize: 16,
      fontFamily:'DMSans-Regular'
    },
    Us:{
      fontSize:16,  
      borderColor:'rgba(90, 128, 253, 1)',
      fontFamily:'DMSans-Regular',
      color:'rgba(255, 255, 255, 1)'
    },
    nextPageButtonContainer:{
      backgroundColor: 'rgba(90, 128, 253, 1)',
      borderRadius: 2,
      paddingVertical:'1%',
      padding: 10
    },
    nextPageButtonText:{
      fontSize:16,  
      borderColor:'rgba(90, 128, 253, 1)',
      fontFamily:'DMSans-Regular',
      color:'rgba(255, 255, 255, 1)'
    }
  });