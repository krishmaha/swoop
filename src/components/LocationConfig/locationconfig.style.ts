import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
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
   },
   textInputContainer: {
     alignItems: 'center',
     justifyContent: 'center',
     height: 80,
   },
   textInput: {
     height: 40,
     width: '90%',
     borderColor: 'gray',
     borderWidth: 1,
     borderRadius: 5,
     padding: 10,
   }
 });

 export default styles; 