import React, { useState, useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationNextButton from '../../buttons/LocationNextButton';
import styles from './locationconfig.style';

import type { GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const LocationConfig = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const ref = useRef<GooglePlacesAutocompleteRef>(null);

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

  return (
    <View style={styles.locationScreenContainer}>
      <View style={styles.headingContainer}>
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
          <LocationNextButton />
        </View>
      )}
    </View>
  );
};

export default LocationConfig;
