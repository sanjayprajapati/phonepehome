import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ScroolView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import Dashboard from '../screens/Dashboard';
import { AuthContext } from '../components/context';
import Home from './Home';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const ResetPass = () => {
    console.log('Yes');
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    } 
    if (!repassword.trim()) {
      alert('Please Enter Password');
      return;
    }else {
      if (password === repassword){
        fetch('http://origin8solutions.com/ForgotPassword.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          navigation.navigate('Login');
        });
      }else {
        alert('Password Not Matches');
         return;
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.text}>Phone Pe Home</Text>
      <Text style={styles.subtext}>Reset Password</Text>


      {/* Email Field */}
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Password Field */}
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="New Password"
        iconType="lock"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={repassword}
        onChangeText={reuserPassword => setRePassword(reuserPassword)}
        placeholderText="Re Enter Password"
        iconType="lock"
        autoCapitalize="none"
        secureTextEntry={true}
      />

      {/* Login Button */}
      <FormButton buttonTitle="Reset Password" onPress={ ResetPass } />

      {/* Forget Button */}
     

      {/* Create Account Button*/}
      
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  subtext: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
