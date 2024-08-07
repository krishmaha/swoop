import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationConfig from '../components/screens/LocationConfig/LocationConfig'; 
import HomeScreen from '../components/screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
  LocationConfigScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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