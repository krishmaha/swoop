import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  locationConfigContainer: {
    backgroundColor: '#000038',
    flex: 1,
  },
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'DMBold',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#fff',
  },
  textInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 24,
    padding: 10,
    color: 'black',
    backgroundColor: '#fff',
  }
});

export default styles; 