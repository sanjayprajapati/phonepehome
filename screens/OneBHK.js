import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const OneBHK = ({navigation}) => {
  const [token, setToken] = useState(null);
  const getData = async () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          //alert('dddd')
          let data = JSON.parse(value);
          setToken(data.usertoken);
          console.log(data.usertoken);
        }
      });
    } catch (error) {
      //console.log(error);
    }
  };
  useEffect(() => {
    getData();
  },[]);
  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%',}}>

      <View style={styles.row1}>
        {/* LIVING ROOM */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController', {
            roomName: 'Living Room',
            roomNum: 'room_1',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_1',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/livingroom.png')} />
          <Text>Living Room</Text>
        </TouchableOpacity>

        {/* KITCHEN */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController', {
            roomName: 'Kitchen',
            roomNum: 'room_2',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_2',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/kitchen.png')} />
          <Text style={styles.livingroom}>Kitchen</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 1 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController', {
            roomName: 'Bedroom',
            roomNum: 'room_4',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_4',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 1</Text>
        </TouchableOpacity>

        {/* BATHROOM */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController', {
            roomName: 'Bathroom',
            roomNum: 'room_5',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_5',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* STOREROOM/STUDYROOM */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Studyroom',
            roomNum: 'room_3',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_3',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/studyroom.png')} />
          <Text style={styles.livingroom}>Studyroom</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default OneBHK;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingBottom: 80,
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
  col1: {
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    padding: 15,
  },
  row1: {
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 20,
  },
  row2: {
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
