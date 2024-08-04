import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './locationnextbutton.styles'

type LocationNextButtonProps = {
  onPress: () => void;
}

const LocationNextButton: React.FC<LocationNextButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.locationNextButton} onPress={onPress}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  )
}

export default LocationNextButton; 