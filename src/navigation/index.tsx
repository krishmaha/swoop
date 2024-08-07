import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationConfig from '../components/screens/LocationConfig/LocationConfig'; 
import HomeScreen from '../components/screens/HomeScreen/HomeScreen';
import LoginScreen from '../components/screens/Authentication/LoginScreen/LoginScreen';
import SignUpScreen from '../components/screens/Authentication/SignUpScreen/SignUpScreen';

export type RootStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  LocationConfigScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LocationConfigScreen"
          component={LocationConfig}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default RootNavigator;