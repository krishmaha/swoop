import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation';
import styles from './signupscreen.style';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        firestore().collection('users').doc(user.uid).set({
          firstName,
          surname,
          email,
        });
        Alert.alert('User account created & signed in!');
        navigation.navigate('LocationConfigScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert(error.message);
          console.log(error);
        }
      });
  };

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
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        value={firstName}
        onChangeText={setFirstName}
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder='Surname'
        value={surname}
        onChangeText={setSurname}
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize='none'
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize='none'
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


export default SignUpScreen;