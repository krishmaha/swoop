import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation';
import styles from './signupscreen.style';

const SignUpScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
        navigation.navigate('LocationConfigScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        // Alert.alert(error.message);
        console.log(error);
      })

  }


  // const signUpTestFunction = () => {
  //   auth().createUserWithEmailAndPassword("email", "password").then(() => {
  //     Alert.alert('user created')
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize='none'
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen;