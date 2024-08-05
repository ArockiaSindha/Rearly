import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ListingScreen from '../screen/Listing Screen/ListingScreen';
import AnimalOVscreen from '../screen/Animal OV screen/AnimalOVscreen';
import { PaperProvider } from 'react-native-paper';
import CreateAnimalScreen from '../screen/Create New Animal/CreateNewAnimal';
import AnimalProfileScreen from '../screen/Animal Profile Screen/AnimalProSrc';
import GradingScreen from '../screen/Grading Screen/GradingSrc';

const Stack = createNativeStackNavigator();


function Route() {
    return (
        <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName= {'ListSrc'} screenOptions={{header:() => null}}>
            <Stack.Screen name="ListSrc" component={ListingScreen} />
            <Stack.Screen name="AnimalOVscreen" component={AnimalOVscreen} />
            <Stack.Screen name="CreateNA" component={CreateAnimalScreen} />
            <Stack.Screen name="AnimalProSrc" component={AnimalProfileScreen}/>
            <Stack.Screen name='GradingSrc' component={GradingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
    );
}
export default Route;