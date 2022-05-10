import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../components/context';

const Dashboard = ({navigation}) => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = React.useContext(AuthContext);
  useEffect(() => {
      getData();
  }, []);

  const getData = async () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          let data = JSON.parse(value);
          setName(data.username);
          setEmail(data.email);
          console.log(data)
          
        }
      });
    } catch (error) {
      //console.log(error);
    }
  };
  const setUppartmentType = appartment_type => {
    //alert(appartment_type);
    //const appartment_type = appartment_type;
    getData();
    fetch('http://192.168.1.5/createprofileapi.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //username: username,
        email: email,
        appartment_type: appartment_type,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        getData();
        //console.log(responseJson);
        if (responseJson['code'] == '1') {
          const foundUser = responseJson;
          AsyncStorage.setItem('userData', JSON.stringify(foundUser));
          signIn(foundUser);
        }else if (responseJson['code'] == '2'){
          const foundUser = responseJson;
          AsyncStorage.setItem('userData', JSON.stringify(foundUser));
          signIn(foundUser);
        }else if (responseJson['code'] == '3'){
          const foundUser = responseJson;
          AsyncStorage.setItem('userData', JSON.stringify(foundUser));
          signIn(foundUser);
        }else if (responseJson['code'] == '4'){
          const foundUser = responseJson;
          AsyncStorage.setItem('userData', JSON.stringify(foundUser));
          signIn(foundUser);
        }else if (responseJson['code'] == '5'){
          const foundUser = responseJson;
          AsyncStorage.setItem('userData', JSON.stringify(foundUser));
          signIn(foundUser);
        }else {
          const foundUser = responseJson;
          AsyncStorage.setItem('userData', JSON.stringify(foundUser));
          signIn(foundUser);
        }
        
        console.log(username);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Choose Your House Type</Text>

      {/* 2BHK */}
      <TouchableOpacity onPress={() => setUppartmentType('onebhk')}>
        <Image source={require('../assets/images/twoBHK2.png')} />
      </TouchableOpacity>

      {/* 3BHK */}
      <TouchableOpacity onPress={() => setUppartmentType('twobhk')}>
        <Image source={require('../assets/images/threeBHK1.png')} />
      </TouchableOpacity>

      {/* 4BHK */}

      {/* PENTHOUSE */}
      <TouchableOpacity onPress={() => setUppartmentType('threebhk')}>
        <Image source={require('../assets/images/penthouse2.png')} />
      </TouchableOpacity>

      {/* FARMHOUSE */}
      <TouchableOpacity onPress={() => setUppartmentType('fourbhk')}>
        <Image source={require('../assets/images/farmhouse1.png')} />
      </TouchableOpacity>

      {/* Personal Configuration */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Customization')}>
        <Text style={styles.navButtonText}>Or Configure your own House</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  Image: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: 10,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
