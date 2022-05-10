import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

const PentHouse = ({navigation}) => {
  return (
    <View style={styles.container}>
      
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.row1}>
        {/* LIVING ROOM */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LivingRoom')}
          style={styles.col1}>
          <Image source={require('../assets/images/livingroom.png')} />
          <Text>Living Room</Text>
        </TouchableOpacity>

        {/* KITCHEN */}
        <TouchableOpacity
          onPress={() => navigation.navigate('kitchen')}
          style={styles.col1}>
          <Image source={require('../assets/images/kitchen.png')} />
          <Text style={styles.livingroom}>Kitchen</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 1 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('bedroomOne')}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 1</Text>
        </TouchableOpacity>

        {/* BATHROOM 1*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('bathroomOne')}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 2 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('bedroomTwo')}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 2</Text>
        </TouchableOpacity>

        {/* BATHROOM 2*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('bathroomTwo')}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 3 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('bedroomThree')}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 3</Text>
        </TouchableOpacity>

        {/* BATHROOM 3*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('bathroomThree')}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        {/* BEDROOM 4 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('bedroomFour')}
          style={styles.col1}>
          <Image source={require('../assets/images/bedroom.png')} />
          <Text style={styles.livingroom}>Bedroom 4</Text>
        </TouchableOpacity>

        {/* BATHROOM 4*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('bathroomFour')}
          style={styles.col1}>
          <Image source={require('../assets/images/bathroom.png')} />
          <Text style={styles.livingroom}>Bathroom 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        {/* STOREROOM/STUDYROOM */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Studyroom')}
          style={styles.col1}>
          <Image source={require('../assets/images/studyroom.png')} />
          <Text style={styles.livingroom}>Studyroom</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default PentHouse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingBottom: 80,
  },
  scrollContainer:{
    width: '100%',
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
