import React, {useState,useEffect} from 'react';
import {View, ScrollView,Text, ActivityIndicator, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpinnerButton from 'react-native-spinner-button';

import Dashboard from '../screens/Dashboard';
import Customization from '../screens/Customization';
import OneBHK from '../screens/OneBHK';
import TwoBHK from '../screens/TwoBHK';
import ThreeBHK from '../screens/ThreeBHK';
import FourBHK from '../screens/FourBHK';
import PentHouse from '../screens/PentHouse';
import FarmHouse from '../screens/FarmHouse';
import LivingRoom from '../screens/LivingRoom';
import kitchen from '../screens/kitchen';
import BedroomTwo from '../screens/bedroomTwo';
import BedroomOne from '../screens/bedroomOne';
import bathroomOne from '../screens/bathroomOne';
import bathroomTwo from '../screens/bathroomTwo';
import BedroomThree from '../screens/bedroomThree';
import BedroomFour from '../screens/bedroomFour';
import BathroomThree from '../screens/bathroomThree';
import BathroomFour from '../screens/bathroomFour';
import Studyroom from '../screens/Studyroom';
import switchController from '../screens/switchController';

const Stack = createStackNavigator();

  
const Home = () => {
  const [appart, setAppart] = useState('');

  useEffect(() => {
      getData();
  }, []);

  const getData = async () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          //alert('dddd')
          let data = JSON.parse(value);
          setAppart(data.appartment_id);
          console.log(appart);
        }
      });
    } catch (error) {
      //console.log(error);
    }
  };
//  const appartment = ()=> {
  
//    console.log(appart)
//    if(appart == 'onebhk') {
//      return(
//       <Stack.Screen
//         name="OneBHK"
//         component={OneBHK}
//         options={{header: () => null}}
//       />
//      );
//    }else if (appart == 'twobhk'){
    
//     return(
      
//      );
//    }
//  }
if( appart === '' || appart === null){
    
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="#ff0000"/>
    </View>
  );
}

  return (
    <Stack.Navigator>
      {appart == '1'? <Stack.Screen
        name="OneBHK"
        component={OneBHK}
        options={{
          title: 'Controll Your Home',
          headerStyle: {
            backgroundColor: '#F88440',
            height: 80,
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
      />: 
      appart == '2'? <Stack.Screen
      name="TwoBHK"
      component={TwoBHK}
      options={{
        title: 'Controll Your Home',
        headerStyle: {
          backgroundColor: '#F88440',
          height: 80,
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
    />:
    appart == '3'?<Stack.Screen
    name="ThreeBHK"
    component={ThreeBHK}
    options={{
      title: 'Controll Your Home',
      headerStyle: {
        backgroundColor: '#F88440',
        height: 80,
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
  />:
  appart == '4'?
  <Stack.Screen
    name="FourBHK"
    component={FourBHK}
    options={{
      title: 'Controll Your Home',
      headerStyle: {
        backgroundColor: '#F88440',
        height: 80,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        width: '100%',
      },

    }}
  />:
  appart == '5'?
  <Stack.Screen
    name="PentHouse"
    component={PentHouse}
    options={{
      title: 'Controll Your Home',
      headerStyle: {
        backgroundColor: '#F88440',
        height: 80,
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
  />:
    <Stack.Screen
    name="6"
    component={FarmHouse}
    options={{
      title: 'Controll Your Home',
      headerStyle: {
        backgroundColor: '#F88440',
        height: 80,
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
      }
        
      
      <Stack.Screen
        name="Customization"
        component={Customization}
        options={{header: () => null}}
      />
      
      
      <Stack.Screen
        name="LivingRoom"
        component={LivingRoom}
        options={{header: () => null
        }}
      />
      <Stack.Screen
        name="kitchen"
        component={kitchen}
        options={{header: () => null
        }}
      />
      <Stack.Screen
        name="bedroomOne"
        component={BedroomOne}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bedroomTwo"
        component={BedroomTwo}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bathroomOne"
        component={bathroomOne}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bathroomTwo"
        component={bathroomTwo}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bedroomThree"
        component={BedroomThree}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bedroomFour"
        component={BedroomFour}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bathroomThree"
        component={BathroomThree}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="bathroomFour"
        component={BathroomFour}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Studyroom"
        component={Studyroom}
        opt
        ions={{header: () => null}}
      />
      <Stack.Screen
        name="SwitchController"
        component={switchController}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );

};

export default Home;
