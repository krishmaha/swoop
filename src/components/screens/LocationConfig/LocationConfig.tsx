import React, { useState, useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationNextButton from '../../buttons/LocationNextButton';
import { useNavigation, NavigationProp }from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import HomeScreen from '../HomeScreen/HomeScreen';
import { RootStackParamList } from '../../../navigation';
import styles from './locationconfig.style';

import type { GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const LocationConfig = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [firstName, setFirstName] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userDocument = await firestore().collection('users').doc(currentUser.uid).get();
        if (userDocument.exists) {
          const userData = userDocument.data();
          setFirstName(userData?.firstName || null);
        }
      }
    };
    fetchUser();    
  }, []);
  
  const ref = useRef<GooglePlacesAutocompleteRef>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  useEffect(() => {
    if (ref.current) {
      const interval = setInterval(() => {
        if (ref.current && ref.current.isFocused()) {
          setIsFocused(true);
        } else {
          setIsFocused(false);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [ref.current]);

  const handleNextPress = () => {
    console.log('Next button pressed: navigation to homescreen');
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={styles.locationScreenContainer}>
      <View style={styles.headingContainer}>
        {firstName && (
          <Text style={styles.headingText}>Hi, {firstName}!</Text>
        )}
        <Text style={styles.headingText}>Where are you looking for events?</Text>
      </View>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          ref={ref}
          placeholder="Search for cities"
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
            types: '(cities)',
          }}
          onPress={(data, details = null) => {
            console.log(data);
            setSelectedLocation(data.description);
            setIsDropdownOpen(false);
          }}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }}
          styles={{
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
            predefinedPlacesDescription: styles.predefinedPlacesDescription,
            listView: styles.listView,
          }}
          textInputProps={{
            clearButtonMode: 'always',
          }}
        />
      </View>
      {selectedLocation && !isDropdownOpen && !isFocused && (
        <View style={styles.nextButtonContainer}>
          <LocationNextButton onPress={handleNextPress}/>
        </View>
      )}
    </View>
  );
};

export default LocationConfig;
