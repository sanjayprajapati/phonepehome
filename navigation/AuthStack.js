import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/Dashboard';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {    
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  },[]);

  if(isFirstLaunch === null){
    return null
  }
  else if(isFirstLaunch === true){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding" component={OnboardingScreen} options={{header: () => null }}
        />
        <Stack.Screen
          name="Login" component={LoginScreen} options={{header: () => null }}
        />
        <Stack.Screen
          name="Signup" component={SignupScreen} options={{header: () => null }}
        />
        <Stack.Screen
          name="ForgotPassword" component={ForgotPassword} options={{header: () => null }}
        />
      </Stack.Navigator>
    );
  }else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login" component={LoginScreen} options={{header: () => null}}
        />
        <Stack.Screen
          name="Signup" component={SignupScreen} options={{header: () => null}}
        />
        <Stack.Screen
          name="ForgotPassword" component={ForgotPassword} options={{header: () => null }}
        />
      </Stack.Navigator>
    );
  }
    

  

  }
export default AuthStack;
