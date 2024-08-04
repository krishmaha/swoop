import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  locationScreenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textInputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 44,
    color: '#000',
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  listView: {
    backgroundColor: '#f0f0f0', 
    borderRadius: 5,
    marginHorizontal: 10,
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  headingContainer: {
    height: 200,
    justifyContent: 'center',
  }
});

export default styles;