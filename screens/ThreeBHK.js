import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ThreeBHK = ({navigation}) => {
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
          onPress={() => navigation.navigate('SwitchController',{
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
          onPress={() => navigation.navigate('SwitchController',{
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
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Bedroom 1',
            roomNum: 'room_4',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_4',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 1</Text>
        </TouchableOpacity>

        {/* BATHROOM 1*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Bathroom 1',
            roomNum: 'room_5',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_5',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 2 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Bedroom 2',
            roomNum: 'room_6',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_6',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 2</Text>
        </TouchableOpacity>

        {/* BATHROOM 2*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Batthroom 2',
            roomNum: 'room_7',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_7',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 3 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Bedroom 3',
            roomNum: 'room_8',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_8',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 3</Text>
        </TouchableOpacity>

        {/* BATHROOM 3*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'Bathroom 3',
            roomNum: 'room_9',
            url: 'http://origin8solutions.com/switches.php?apikey='+token+'&room=room_9',
          })}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        {/* STOREROOM/STUDYROOM */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchController',{
            roomName: 'studyroom',
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

export default ThreeBHK;

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
