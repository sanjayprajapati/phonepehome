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
import {AuthContext} from '../components/context';
import {login} from '../actions/actions';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = React.useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [shwo, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
  };
  //const { getAppart } = React.useContext(AuthContext);
  const HOST = 'http://10.0.2.2/origin8solutions/loginapi.php?email=';
  const userLogin = () => {
    console.log(password);
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    } else {
      console.log(HOST + email + '&password=' + password);
      fetch(HOST + email + '&password=' + password, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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
          if (responseJson['code'] == '1') {
            //alert('1')
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            signIn(foundUser);
          } else if (responseJson['code'] == '2') {
            //alert('2')
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            //console.log(value);
            signIn(foundUser);
            // navigation.navigate('TwoBHK');
          } else if (responseJson['code'] == '3') {
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            //console.log(value);
            signIn(foundUser);
            //navigation.navigate('ThreeBHK');
          } else if (responseJson['code'] == '4') {
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            //console.log(value);
            signIn(foundUser);
            // navigation.navigate('FourBHK');
          } else if (responseJson['code'] == '5') {
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            //console.log(value);
            signIn(foundUser);
            // navigation.navigate('PentHouse');
          } else if (responseJson['code'] == '6') {
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            //console.log(value);
            signIn(foundUser);
            // navigation.navigate('FarmHouse');
          } else if (responseJson['code'] == '7') {
            let foundUser = responseJson['data'];
            AsyncStorage.setItem('userData', JSON.stringify(foundUser));
            console.log(foundUser);
            //getAppart(foundUser);
            // redirect to profile page
            console.log('Successfully Login');
            navigation.navigate('Dashboard');
          } else {
            alert('Wrong Login Details');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

    // login(email, password);
    // console.log('working');
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.text}>Phone Pe Home</Text>

      {/* Email Field */}
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Password Field */}
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        autoCapitalize="none"
        secureTextEntry={true}
      />

      {/* Login Button */}
      <FormButton buttonTitle="Sign In" onPress={userLogin} />

      {/* Forget Button */}
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Create Account Button*/}
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
