import React, {useState,useEffect} from 'react';
import {View, ImageBackground, Image, Switch, StyleSheet, Text, Alert, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../components/Header';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../components/context';

const Support = () => {
  const { signOut } = React.useContext(AuthContext);
  const [image, setImage] = useState('http://192.168.1.5/assets/images/support.png');
 

  return (
    <View style={styles.container}>
      <Image  source={{uri: image}} style={styles.user} /> 
      <View ><Text style={styles.username}>John Doe</Text></View>
      <View style={styles.row}>
        <FontAwesome name="user" size={22} color="gray" />
        <Text>8826462790</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome name="mobile" size={26} color="gray" />
        <Text>8826462790</Text>
      </View>
      
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 0
  },
  username: {
    fontSize: 22,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center'
  }
});
