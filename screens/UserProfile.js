import React, {useState,useEffect} from 'react';
import {View, ImageBackground, Image, Switch, StyleSheet, Text, Alert, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../components/Header';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../components/context';

const UserProfile = () => {
  const { signOut } = React.useContext(AuthContext);
  const [image, setImage] = useState('http://origin8solutions.com/assets/images/support1.png');
  const [userName, setUserName]= useState('');
  const [contactNo, setContactNo]= useState('');
  const [userEmail, setUserEmail]= useState('');
  
  const getData = async () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          let data = JSON.parse(value);
          setUserEmail(data.email);
          setContactNo(data.mobile);
          setUserName(data.username);
          
          //setToken(data.email);
          console.log(data.email);;
        }
      });
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <View style={styles.container}>
      <View style={styles.outerBorder}>     
        <FontAwesome name="user" size={100} color="white" />   
      </View>  
      <View ><Text style={styles.username}>{userName}</Text></View>
      <View style={styles.row}>
        <AntDesign name="user" size={20} color="gray" />
        <Text>  {userName}</Text>
      </View>
      <View style={styles.row}>
        <AntDesign name="mail" size={20} color="gray" />
        <Text>  {userEmail}</Text>
      </View>
      <View style={styles.row}>
        <AntDesign name="phone" size={20} color="gray" />
        <Text>  {contactNo}</Text>
      </View>
      <View style={styles.rowlast}>
      <TouchableOpacity
          onPress={() => {signOut()}}
          style={styles.col1}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  outerBorder: {
    backgroundColor: '#fb8d4e',
    borderRadius: 65,
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    fontSize: 22,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderBottomWidth:1,
    borderBottomColor: 'gray',
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center'
  },
  rowlast: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderBottomWidth:0,
    borderBottomColor: 'gray',
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center'
  },
  logout: {
    fontSize: 20,
    color: '#fb8d4e',
  },
});
