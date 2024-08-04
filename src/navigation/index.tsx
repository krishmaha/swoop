import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationConfig from '../components/screens/LocationConfig/LocationConfig'; 

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Where are you based?"
          component={LocationConfig}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default RootNavigator;