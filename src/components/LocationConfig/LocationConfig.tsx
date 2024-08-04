import * as React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './locationconfig.style';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const LocationAutoComplete = () => {
  return (
    <View style={styles.locationScreenContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Where are you looking for events?</Text>
      </View>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search for cities"
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
            types: '(cities)',
          }}
          onPress={(data, details = null) => console.log(data)}
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
        />
      </View>
    </View>
  );
};

export default LocationAutoComplete;
