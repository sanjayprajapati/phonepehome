import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../screens/Dashboard';
import Customization from '../screens/Customization';
import OneBHK from '../screens/OneBHK';
import TwoBHK from '../screens/TwoBHK';
import ThreeBHK from '../screens/ThreeBHK';
import LivingRoom from '../screens/LivingRoom';
import kitchen from '../screens/kitchen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="TwoBHK"
        component={TwoBHK}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Customization"
        component={Customization}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="OneBHK"
        component={OneBHK}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="ThreeBHK"
        component={ThreeBHK}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LivingRoom"
        component={LivingRoom}
        options={{
          title: 'Living Room',
          headerStyle: {
            backgroundColor: '#F88440',
            height: 100,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            width: '100%',
          },
        }}
      />
      <Stack.Screen
        name="kitchen"
        component={kitchen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('TwoBHK')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
