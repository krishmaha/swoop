import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './locationnextbutton.styles'

const LocationNextButton = () => {

  const onPress = () => {
    console.log('Next button pressed');
  }

  return (
    <TouchableOpacity style={styles.locationNextButton} onPress={onPress}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  )
}

export default LocationNextButton; 