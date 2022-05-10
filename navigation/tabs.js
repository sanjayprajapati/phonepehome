import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator,StyleSheet, TabBarIOSItem} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { AuthContext } from '../components/context';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Support from '../screens/Support';

const Tab = createBottomTabNavigator();

const Tabs = ()=> {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#F88440',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    height: 60,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    left: 0,
                    right: 0,
                    paddingBottom: 10,
                    position: 'absolute'
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                   
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'home'
                        : 'home';
                        color = focused
                        ? '#F88440'
                        : 'gray';
                    } else if (route.name === 'Profile') {
                      iconName = focused ? 'user' : 'user-o';
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'cog' : 'cog';
                    }
                    else if (route.name === 'Support') {
                      iconName = focused ? 'support' : 'support';
                    }
        
                    // You can return any component that you like here!
                    return <FontAwesome name={iconName} size={size} color={color} />;
                  },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{header: () => null }}></Tab.Screen>
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            <Tab.Screen name="Support" component={Support} options={{header: ()=> null}} />
            <Tab.Screen name="Profile" component={UserProfile} options={{header: () => null}}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;