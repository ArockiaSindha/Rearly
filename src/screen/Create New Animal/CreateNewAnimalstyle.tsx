import { StyleSheet } from "react-native";

export const CreateNewAnimalstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 15,
  },
  formContainer: {
    padding: '2%',
    paddingVertical: '3%',
  },
  inputWrapper: {
    paddingVertical: '1%',
  },
  input: {
    padding: '1%',
    //paddingBottom: '4%',
    borderWidth: 1,
    paddingVertical: '1%',
    borderRadius: 5,
    backgroundColor: 'rgba(217, 217, 217, 0.25)',
    marginBottom: 18,
    borderColor: 'rgba(0, 0, 0, 0.26)',
    fontSize: 15,
  },
  label: {
    fontFamily: 'DMSans-SemiBold', 
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 15, 
  },
  button: {
    marginTop: 16,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: 'rgba(90, 128, 253, 1)',
    borderRadius: 5,
    color: 'rgba(0, 0, 0, 1)',
  },
  buttontext: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontFamily:'DMSans-SemiBold'
  },
  UI: {
    padding: 15,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 15,
    borderColor: 'rgba(0, 0, 0, 0.26)',
    borderRadius: 5,
    backgroundColor: 'rgba(217, 217, 217, 0.25)',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily:'DMSans-SemiBold'
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginVertical: 10,
  },
  removeImageButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  },
});
