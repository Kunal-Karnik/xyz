import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
//import LoginScreen from './app/screens/LoginScreenScreen';




const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        <Stack.Screen name="Registration" component={RegistrationScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export function App() {
//   return <WelcomeScreen />;
// }
// export function Register() {
//   return <RegistrationScreen />;
// }
// export function index() {
//   return <index />;
// }
// export function Config() {
//   return <Config />;
// }








