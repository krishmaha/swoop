import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from './locationconfig.style';

const LocationConfig = () => {
const [text, setText] = useState('');
const [location, setLocation] = useState('');

const handleLocationSubmit = () => {
  setLocation(text);
  console.log(`Locations of interest set to: ${text}`);
}

return (
  <View>
    <View style={styles.container}>
      <Text style={styles.text}>Where are you looking for events?</Text>
    </View>
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        placeholder="London, San Francisco, ..."
        placeholderTextColor="#999" 
        onSubmitEditing={handleLocationSubmit}
        clearButtonMode="always"
      />
    </View>
  </View>
  )
}

export default LocationConfig;