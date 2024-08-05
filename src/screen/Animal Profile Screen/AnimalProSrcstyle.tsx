import { StyleSheet } from "react-native";

export const animalProSrcstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  headerTitle: {
    fontFamily: 'DMSans_24pt-Medium',
    fontSize: 24,
    color: '#000000',
  },
  scrollViewContent: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 3,
  },
  descriptionContainer: {
   paddingVertical:'10%',
  },
  PC:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color:'rgba(0, 0, 0, 1)',
    fontFamily:'DMSans_18pt-Bold',
    marginBottom: 8,
    fontSize:28
  },
  descriptionDetails: {
    padding:'5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  text:{
    color:'rgba(0, 0, 0, 0.55)',
    fontSize: 18,
    fontFamily:'DMSans-Medium'
  },
  descriptionItem: {
    padding: '2%',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 1)',
  },
  descriptionValue: {
    padding: '2%',
    paddingHorizontal:'3%',
    //fontWeight: 'bold',
    fontFamily:'DMSans-Medium',
    color:'rgba(0, 0, 0, 1)',
    fontSize: 20
  },
  weightsContainer: {
    padding:'5%'
  },
  weightItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:'2%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)'
    //marginBottom: 4,
  },
  value:{
    padding: '2%',
    color:'rgba(0, 0, 0, 0.5)',
    fontFamily:'DMSans-Medium'
  },
  weightValue: {
    //fontWeight: 'bold',
    fontSize: 16,
    color:'rgba(0, 0, 0, 1)',
    fontFamily:'DMSans-Medium'
  },
  viewAllText: {
    color: 'rgba(0, 0, 0, 0.64)',
    paddingHorizontal:'3%',
    padding:'1%',
     fontFamily:'DMSans-Medium'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   paddingVertical:'2%',
  },
  markButton: {
    borderWidth: 1,
    borderColor: 'rgba(90, 128, 253, 1)',
    borderRadius: 5,
    paddingVertical:'1%',
    paddingHorizontal:'10%',
  },
  editButton: {
    backgroundColor: 'rgba(90, 128, 253, 1)',
    paddingVertical:'1%',
    paddingHorizontal:'10%',
    borderRadius: 5,
  },
  buttonText: {
    color:'rgba(255, 255, 255, 1)',
    fontSize: 18,
     fontFamily:'DMSans-Medium'
  },
  MarkText:{
    color:'rgba(90, 128, 253, 1)',
    fontSize: 18,
     fontFamily:'DMSans-Medium'
  },
  pickerContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingBottom:'2%'
    //marginBottom: 16,
  },
  pickerButton: {
    padding: 5,
    backgroundColor:'rgba(90, 128, 253, 1)',
    borderColor: 'rgba(90, 128, 253, 1)',
    borderWidth: 1,
    borderRadius: 5,
  },
  pickerButtonText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily:'DMSans-Medium'
  },
});
