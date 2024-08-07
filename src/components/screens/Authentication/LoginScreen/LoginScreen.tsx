import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './loginscreen.style';
import auth from '@react-native-firebase/auth';
import { RootStackParamList } from 'src/navigation';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Logged in!');
        navigation.navigate('LocationConfigScreen');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          Alert.alert('Email or password incorrect!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Invalid email address!');
        }
        console.log(error);
      });
  };

  const goToSignUp = () => {
    navigation.navigate('SignUpScreen')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In</Text>
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

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignUp}>
        <Text style={styles.signUpText}>New here? Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;
