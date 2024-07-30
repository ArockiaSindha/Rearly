import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ListingScreen from '../screen/Listing Screen/ListingScreen';

const Stack = createNativeStackNavigator();


function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName= {'ListSrc'} screenOptions={{header:() => null}}>
            <Stack.Screen name="ListSrc" component={ListingScreen} />
            </Stack.Navigator>
            </NavigationContainer>
    );
}
export default Route;
