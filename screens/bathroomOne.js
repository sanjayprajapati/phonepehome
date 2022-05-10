import React, {useState,useEffect,useCallback} from 'react';
import {View, ImageBackground , Switch, StyleSheet, Text, TextInput, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../components/Header';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SpinnerButton from 'react-native-spinner-button';
import DotLoader from 'react-native-three-dots-loader'
import { isStatement } from '@babel/types';



const BathroomOne = ({navigation}) => {
  
  const [isLoading, setLoading] = useState(false);
  const [isOnnAll, setIsOnnAll] = useState(false);
  const [isOnn1, setIsOnn1] = useState('OFF');
  const [isOnn1loading, setIsOnn1loding] = useState(false);
  const [isPinval1, setIsPinval1] =useState('0');
  const [isOnn2, setIsOnn2] = useState('OFF');
  const [isOnn2loading, setIsOnn2Loading] = useState(false);
  const [isPinval2, setIsPinval2] =useState('0');
  const [isOnn3, setIsOnn3] = useState('OFF');
  const [isOnn3loading, setIsOnn3Loading] = useState(false);
  const [isPinval3, setIsPinval3] =useState('0');  
  const [isOnn4, setIsOnn4] = useState('OFF');
  const [isOnn4loading, setIsOnn4Loading] = useState(false);
  const [isPinval4, setIsPinval4] =useState('0');
  const [isOnn5, setIsOnn5] = useState('OFF');
  const [isOnn5loading, setIsOnn5Loading] = useState(false);
  const [isPinval5, setIsPinval5] =useState('0');
  const HOST = 'http://origin8solutions.com/switchcontroller.php?apikey=';
  
  // const Switch1 = () => setIsOnn1(previousState => !previousState);
  // const Switch2 = () => setIsOnn2(previousState => !previousState);
  // const Switch3 = () => setIsOnn3(previousState => !previousState);
  // const Switch4 = () => setIsOnn4(previousState => !previousState);
  // const Switch5 = () => setIsOnn5(previousState => !previousState);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState('');
  const [btnText, setBtnText] = useState('on');
  const handleButtonPress = useCallback(() => {
    setLoading(true);
    setFlag(true);
    setTimeout(() => {
    if(btnText == 'on'){
      fetch(HOST+token+'&room=4&allpin=1', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: data,
        }),
      });
      setBtnText('off');
      setIsOnn1('ON');
      setIsPinval1('0');
      setIsOnn2('ON');
      setIsPinval2('0');
      setIsOnn3('ON');
      setIsPinval3('0');
      setIsOnn4('ON');
      setIsPinval4('0');
      setIsOnn5('ON');
      setIsPinval5('0');
      AsyncStorage.setItem('BTHRO_switchOnestatus', 'ON');
      AsyncStorage.setItem('BTHRO_switchTwostatus', 'ON');
      AsyncStorage.setItem('BTHRO_switchThreestatus', 'ON');
      AsyncStorage.setItem('BTHRO_switchFourstatus', 'ON');
      AsyncStorage.setItem('BTHRO_switchFivestatus', 'ON');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'off');
    }else {
      fetch(HOST+token+'&room=4&allpin=0', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: data,
        }),
      });
      setBtnText('on');
      setIsOnn1('OFF');
      setIsPinval1('1');
      setIsOnn2('OFF');
      setIsPinval2('1');
      setIsOnn3('OFF');
      setIsPinval3('1');
      setIsOnn4('OFF');
      setIsPinval4('1');
      setIsOnn5('OFF');
      setIsPinval5('1');
      AsyncStorage.setItem('BTHRO_switchOnestatus', 'OFF');
      AsyncStorage.setItem('BTHRO_switchTwostatus', 'OFF');
      AsyncStorage.setItem('BTHRO_switchThreestatus', 'OFF');
      AsyncStorage.setItem('BTHRO_switchFourstatus', 'OFF');
      AsyncStorage.setItem('BTHRO_switchFivestatus', 'OFF');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'on');
    }
      
          setLoading(false);
          setFlag(false);
      }, 3000);
  });

  const [isEditing, setEditing] = useState(false);
  const [textInputValue, setTextInputValue] = useState('Pin1');

  const [email, setEmail] = useState('');
  const [appart, setAppart] = useState('');
  const [token, setToken] = useState('');
  
  const savePinNameOne = (textInputValue1)=> {
    //setTextInputValue()
    AsyncStorage.setItem('pinNameOne', JSON.stringify(textInputValue1));
     setTextInputValue(textInputValue1)
    setEditing(false);
   console.log(textInputValue1);
  }
  const getPinNameOne = async () => {
    try {
      AsyncStorage.getItem('pinNameOne').then(value => {
        if (value !== null) {
          //alert('dddd')
          let data = JSON.parse(value);
          setTextInputValue(data);
          console.log(data)
          //console.log(email)
        }
      });
    } catch (error) {
      //console.log(error);
    }
  }
  const getToken = async() => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          //alert('dddd')
          let data = JSON.parse(value);
          setToken(data.usertoken);
          console.log(token);
        }
      });
    } catch (error) {
      //console.log(error);
    }
  }
  const getData = async () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          //alert('dddd')
          let data = JSON.parse(value);
          setToken(data.usertoken);
          console.log(token);
        }
      });
    } catch (error) {
      //console.log(error);
    }
  };

 useEffect(() => {
  getPinNameOne();

  getData();
  //getToken();
 // toggleSwitch();
    AsyncStorage.getItem('BTHRO_switchOnestatus').then(value => {
      if (value === 'ON') {        
        setIsOnn1('ON');
        setIsPinval1('0');
        console.log('mkkjk= '+isOnn1)
      } else {
        setIsOnn1('OFF');
        setIsPinval1('1');
        console.log('kjhgjkgh'+value)
      }
    });
    AsyncStorage.getItem('BTHRO_switchTwostatus').then(value => {
      if (value === 'ON') {
        
        setIsOnn2('ON');
        setIsPinval2('0');
        console.log('mkkjk= '+isOnn2)
      } else {
        setIsOnn2('OFF');
        setIsPinval2('1');
        console.log('kjhgjkgh'+value)
      }
    });
    AsyncStorage.getItem('BTHRO_switchThreestatus').then(value => {
      if (value === 'ON') {
        
        setIsOnn3('ON');
        setIsPinval3('0');
        console.log('mkkjk= '+isOnn3)
      } else {
        setIsOnn3('OFF');
        setIsPinval3('1');
        console.log('kjhgjkgh'+value)
      }
    });
    AsyncStorage.getItem('BTHRO_switchFourstatus').then(value => {
      if (value === 'ON') {
        
        setIsOnn4('ON');
        setIsPinval4('0');
        console.log('mkkjk= '+isOnn1)
      } else {
        setIsOnn4('OFF');
        setIsPinval4('1');
        console.log('kjhgjkgh'+value)
      }
    });
    AsyncStorage.getItem('BTHRO_switchFivestatus').then(value => {
      if (value === 'ON') {
        
        setIsOnn5('ON');
        setIsPinval5('0');
        console.log('mkkjk= '+isOnn1)
      } else {
        setIsOnn5('OFF');
        setIsPinval5('1');
        console.log('kjhgjkgh'+value)
      }
    });
    AsyncStorage.getItem('BTHRO_AllswitchStatus').then(value => {
      if (value === 'off') {        
        setBtnText('off');
      } else {
        setBtnText('on');
      }
    });
}, []);
  
  const APPART_TYPE = appart+'/';
  const ROOM_TYPE = 'bathroomone/';
  //
  const switchAllOnOff = ()=> {

  }
  const switch1OnOff = ()=> {
    //getToken();
    //setFlag(true);
    //Switch1();
    setIsOnn1loding(true);
    setFlag(true);
    setTimeout(() => {
    if(isOnn1 === 'OFF') {
      setIsPinval1('0');
      setIsOnn1('ON');
      AsyncStorage.setItem('BTHRO_switchOnestatus', 'ON');
      setBtnText('off');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'off');
    }
    if(isOnn1 === "ON") {
      setIsPinval1('1');
      setIsOnn1('OFF');
      AsyncStorage.setItem('BTHRO_switchOnestatus', 'OFF');
      setBtnText('on');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'on');
    }
    
    const finalrul = HOST+token+'&room=4&switch1='+isPinval1;
    console.log(finalrul)
    fetch(finalrul, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    .then(response => response.json())
    .then(responseJson => {
      //getData();
      // console.log(responseJson);
      if(responseJson['code'] == '1'){
        console.log(responseJson['data']);             
      }
      
    })
    .catch(error => {
      console.error(error);
    }); 
    setIsOnn1loding(false);
    setFlag(false);
  }, 1000);    
      
  }
  const switch2OnOff = ()=> {
    setIsOnn2Loading(true);
    setFlag(true);
   // Switch2();
   setTimeout(()=> {
        if(isOnn2 == 'OFF') {
          setIsPinval2('0');
          setIsOnn2('ON');
          AsyncStorage.setItem('BTHRO_switchTwostatus', 'ON');
          setBtnText('off');
          AsyncStorage.setItem('BTHRO_AllswitchStatus', 'off');
        }
        if(isOnn2 == 'ON') {
          setIsPinval2('1');
          setIsOnn2('OFF');
          AsyncStorage.setItem('BTHRO_switchTwostatus', 'OFF');
          setBtnText('on');
          AsyncStorage.setItem('BTHRO_AllswitchStatus', 'on');
        }

          const finalrul = HOST+token+'&room=4&switch2='+isPinval2;
          console.log(finalrul)
          fetch(finalrul, {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          })
          .then(response => response.json())
          .then(responseJson => {
            //getData();
           // console.log(responseJson);
            if(responseJson['code'] == '1'){
              console.log(responseJson['data']);             
            }
            
          })
          .catch(error => {
            console.error(error);
          });

          setIsOnn2Loading(false);          
          setFlag(false);
        }, 1500);

        
  }
  const switch3OnOff = ()=> {
   // Switch3();
   setIsOnn3Loading(true);
   setFlag(true);
   setTimeout(()=>{
    if(isOnn3 == 'OFF') {
      setIsPinval3('0');
      setIsOnn3('ON');
      AsyncStorage.setItem('BTHRO_switchThreestatus', 'ON');
      setBtnText('off');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'off');
    }
    if(isOnn3 == 'ON') {
      setIsPinval3('1');
      setIsOnn3('OFF');
      AsyncStorage.setItem('BTHRO_switchThreestatus', 'OFF');
      setBtnText('on');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'on');
    }
    
          const finalrul = HOST+token+'&room=4&switch3='+isPinval3;
          console.log(finalrul)
          fetch(finalrul, {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          })
          .then(response => response.json())
          .then(responseJson => {
            //getData();
           // console.log(responseJson);
            if(responseJson['code'] == '1'){
              console.log(responseJson['data']);             
            }
            
          })
          .catch(error => {
            console.error(error);
          });
          setFlag(false);
          setIsOnn3Loading(false);

        }, 1500);

  }
        
  const switch4OnOff = ()=> {
    //Switch4();
    setIsOnn4Loading(true);
    setFlag(true);
    setTimeout(()=> {
    if(isOnn4 == 'OFF') {
      setIsPinval4('0');
      setIsOnn4('ON');
      AsyncStorage.setItem('BTHRO_switchFourstatus', 'ON');
      setBtnText('off');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'off');
    }
    if(isOnn4 == 'ON') {
      setIsPinval4('1');
      setIsOnn4('OFF');
      AsyncStorage.setItem('BTHRO_switchFourstatus', 'OFF');
      setBtnText('on');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'on');
    }
    
          const finalrul = HOST+token+'&room=4&switch4='+isPinval4;
          console.log(finalrul)
          fetch(finalrul, {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          })
          .then(response => response.json())
          .then(responseJson => {
            //getData();
           // console.log(responseJson);
            if(responseJson['code'] == '1'){
              console.log(responseJson['data']);             
            }
            
          })
          .catch(error => {
            console.error(error);
          });

          setIsOnn4Loading(false);
          setFlag(false);
        },1000);  
  }
  const switch5OnOff = ()=> {
   // Switch5();
   setIsOnn5Loading(true);
   setFlag(true);
   setTimeout(()=> {
    if(isOnn5 == 'OFF') {
      setIsPinval5('0');
      setIsOnn5('ON');
      AsyncStorage.setItem('BTHRO_switchFivestatus', 'ON');
      setBtnText('off');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'off');
    }
    if(isOnn5 == 'ON') {
      setIsPinval5('1');
      setIsOnn5('OFF');
      AsyncStorage.setItem('BTHRO_switchFivestatus', 'OFF');
      setBtnText('on');
      AsyncStorage.setItem('BTHRO_AllswitchStatus', 'on');
    }
    
          const finalrul = HOST+token+'&room=4&switch5='+isPinval5;
          console.log(finalrul)
          fetch(finalrul, {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          })
          .then(response => response.json())
          .then(responseJson => {
            //getData();
           // console.log(responseJson);
            if(responseJson['code'] == '1'){
              console.log(responseJson['data']);             
            }
            
          })
          .catch(error => {
            console.error(error);
          });
          setFlag(false);
          setIsOnn5Loading(false);
        }, 1500);

  }
  // const [load, setLoad]=useState(false);
  // const [theArray, setTheArray] = useState([]);
  // const _onItemPress= (pinName)=> {
  //   //const [load, setLoad]=useState(true);
  //   setLoad(true);
  //   setTimeout(()=>{
  //     //setPinName(pinName);
  //     console.log(pinName);
  //     setLoad(false);
  //   }, 2000);
  // }
    
 if(token == '' || token == null ){
  getToken();
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="#ff0000"/>
    </View>
  );
 }
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <TouchableOpacity 
          style={{ /* Put your style here */}}
          onPress={() => navigation.goBack()} >
      
          <FontAwesome name="long-arrow-left" size={24} color="#fff"  />
          
      </TouchableOpacity>
            <Text style={styles.pageTitle}>Bath Room One</Text>
            <SpinnerButton
          buttonStyle={styles.buttonStyle1}
          isLoading={isLoading}
          spinnerType='UIActivityIndicator'
          onPress={handleButtonPress}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={40}
          animateWidth={80}
          animateRadius={20}
          animatedDuration={300}
          spinnerColor={'#999999'}
        >
          <Text style={styles.buttonText}>All {btnText}</Text>
        </SpinnerButton>
      </View> 
       
      <ScrollView style={{padding: 10}}>
      {/* <Text style={styles.livingroom}>Living Room</Text> */}
      {/* <View>
      <TouchableOpacity onPress={() => bs.current.snapTo(0)}><View><Text>Capture</Text></View></TouchableOpacity>
      </View> */}
        
        <View style={styles.switch}>
          <Text style={styles.text}>Switch 1</Text>

          {/* <Switch disabled={flag} style={{ transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }}
            trackColor={{false: '#eeeeee', true: '#fee9dc'}}
            thumbColor={isOnn1 ? '#fb8d4e' : '#e5e5e5'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={ switch1OnOff}
            value={isOnn1}
          /> */}
         <SpinnerButton
          disabled={flag}
          buttonStyle={styles.buttonStyle}
          isLoading={isOnn1loading}
          buttonStyle={{ backgroundColor: isOnn1=='ON' ? '#fb8d4e' : '#eeeeee', width: 60, height: 35, borderRadius: 20, alignSelf: 'flex-end'  }}
          spinnerType='BallIndicator'
          onPress={switch1OnOff}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={35}
          animateWidth={60}
          animateRadius={20}
          animatedDuration={400}
          spinnerColor={isOnn1=='ON' ? '#fff' : '#000'}
          ide={20}
        >
          <Text style={{color: isOnn1=='ON' ? '#fff' : '#333'}}>{isOnn1}</Text>
        </SpinnerButton> 
        </View>
        <View style={styles.switch}>
          <Text style={styles.text}>Switch 2</Text>
          <SpinnerButton
         disabled={flag}
         buttonStyle={{ backgroundColor: isOnn2=='ON' ? '#fb8d4e' : '#eeeeee', width: 60, height: 35, borderRadius: 20, alignSelf: 'flex-end'  }}
          isLoading={isOnn2loading}
          spinnerType='BallIndicator'
          onPress={switch2OnOff}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={35}
          animateWidth={60}
          animateRadius={20}
          animatedDuration={700}
          spinnerColor={isOnn2=='ON' ? '#fff' : '#000'}
        >
          <Text style={{color: isOnn2=='ON' ? '#fff' : '#333'}}>{isOnn2}</Text>
        </SpinnerButton> 
        </View>
      
        <View style={styles.switch}>
          <Text style={styles.text} >Switch 3</Text>
          <SpinnerButton
         disabled={flag}
         buttonStyle={{ backgroundColor: isOnn3=='ON' ? '#fb8d4e' : '#eeeeee', width: 60, height: 35, borderRadius: 20, alignSelf: 'flex-end'  }}
          isLoading={isOnn3loading}
          spinnerType='BallIndicator'
          onPress={switch3OnOff}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={35}
          animateWidth={60}
          animateRadius={20}
          animatedDuration={700}
          spinnerColor={isOnn3=='ON' ? '#fff' : '#000'}
        >
          <Text style={{color: isOnn3=='ON' ? '#fff' : '#333'}}>{isOnn3}</Text>
        </SpinnerButton> 
        </View>
        <View style={styles.switch}>
          <Text style={styles.text}>Switch 4</Text>
          <SpinnerButton
         disabled={flag}
         buttonStyle={{ backgroundColor: isOnn4=='ON' ? '#fb8d4e' : '#eeeeee', width: 60, height: 35, borderRadius: 20, alignSelf: 'flex-end'  }}
          isLoading={isOnn4loading}
          spinnerType='BallIndicator'
          onPress={switch4OnOff}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={35}
          animateWidth={60}
          animateRadius={20}
          animatedDuration={700}
          spinnerColor={isOnn4=='ON' ? '#fff' : '#000'}
        >
          <Text style={{color: isOnn4=='ON' ? '#fff' : '#333'}}>{isOnn4}</Text>
        </SpinnerButton>
        </View>
     
        <View style={styles.switch}>
          <Text style={styles.text} >Switch 5</Text>
          
        <SpinnerButton
          disabled={flag}
          style={styles.buttonStyle}
          buttonStyle={{ backgroundColor: isOnn5=='ON' ? '#fb8d4e' : '#eeeeee', width: 60, height: 35, borderRadius: 20, alignSelf: 'flex-end'  }}
          isLoading={isOnn5loading}
          spinnerType='BallIndicator'
          onPress={switch5OnOff}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={35}
          animateWidth={60}
          animateRadius={20}
          animatedDuration={700}
          spinnerColor={isOnn5=='ON' ? '#fff' : '#000'}
        >
          <Text style={{color: isOnn5=='ON' ? '#fff' : '#333'}}>{isOnn5}</Text>
        </SpinnerButton>
        </View>

      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  editablefield: {
    textAlign:'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  livingroom: {
    textAlign: 'center',
    fontSize: 28,
    color: 'red',
  },
  row: {
    flexDirection:'row',
  },
  switch: {
      alignItems: 'center',
      elevation: 2,
      backgroundColor: 'rgba(255,255,255,1)',
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      marginBottom:5,
      justifyContent: 'space-between',
      flexDirection:'row',
      width:'100%',
      borderRadius: 10,
      opacity: 1
  },
  header: {
      backgroundColor:'#fa8642',
      height: 80,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
marginLeft: 15,
  },
  buttonStyle: {
    alignSelf: 'flex-end' ,
   backgroundColor: '#fee9dc',
   width: 60, 
   height: 35,
   borderRadius: 20, 
  },
  textstyle:{
    fontSize: 14,
  },

  buttonStyle1: {
    alignSelf: 'flex-end' ,
   backgroundColor: '#fff',
   width: 80, 
   height: 40,
   borderRadius: 20, 
  },
  allSwitch: {
    position:'relative',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    left:0,
    alignItems: 'flex-start',
    display:'flex',
    justifyContent: 'flex-start'
  },
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    marginTop: -20,
    marginBottom: -20
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
});

export default BathroomOne;
