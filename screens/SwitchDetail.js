import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Button,
  ImageBackground,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SwitchDetail = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={
            {
              /* Put your style here */
            }
          }
          onPress={() => navigation.goBack()}>
          <FontAwesome name="long-arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>asdfasdf</Text>
      </View>

      <ScrollView
        style={{
          paddingBottom: 80,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          marginBottom: 60,
        }}></ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fa8642',
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginLeft: 15,
  },

  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
  },
});

export default SwitchDetail;
