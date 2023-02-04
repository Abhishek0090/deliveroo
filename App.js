// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { withExpoSnack } from 'nativewind';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withExpoSnack(App);


const styled = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginTop: StatusBar.currentHeight
  }
})
