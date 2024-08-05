import { StyleSheet } from "react-native";

export const GradingSrcstyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding:1,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding:'5%'
        //marginBottom: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      //marginBottom: 16,
      padding:'1%',
       paddingBottom:'2%',
      paddingHorizontal:'5%',
      color:'rgba(0, 0, 0, 1)'
    },
    image:{
        width: 30,
        height: 35,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f8f8f8',
      borderRadius: 2,
      borderBottomWidth:1,
      borderBottomColor:'rgba(0, 0, 0, 0.3)'
    },
    avatar: {
      backgroundColor: 'rgba(90, 128, 253, 0.51)',
      borderWidth: 1,
      borderColor: 'rgba(90, 128, 253, 0.51)',
      borderRadius: 15, fontFamily:'DMSans-Medium'
    },
    textContainer: {
      flex: 1,
      padding:'4%'
      //marginLeft: 16,
    },
    codeText: {
      fontSize: 24,
      //fontWeight: 'bold',
      color:'rgba(0, 0, 0, 1)',
       fontFamily:'DMSans_18pt-Bold'
    },
    weightText: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.55)',
       fontFamily:'DMSans-Medium'
    },
    weightValue: {
        fontFamily:'DMSans_18pt-Bold',
      fontSize: 12,
      color: 'rgba(0, 0, 0, 1)',
    },
    button: {
      borderColor: 'rgba(90, 128, 253, 1)',
      borderWidth:1,
      borderRadius:30
    },
    buttontext:{
        color:'rgba(90, 128, 253, 1)',
         fontFamily:'DMSans-Medium'
    },
  });