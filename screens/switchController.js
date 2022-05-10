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
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SpinnerButton from 'react-native-spinner-button';
//import { createStackNavigator, createAppContainer } from "react-navigation";

const SwitchController = ({route, navigation}) => {
  //console.log(route.params.roomName);
  const [allpins, setAllPins] = useState('ON');
  const [isLoading, setLoading] = useState(false);
  const [isOnn1loading, setIsOnn1loding] = useState(false);
  const [load_0, setLoad0] = useState(false);
  const [load_1, setLoad1] = useState(false);
  const [load_2, setLoad2] = useState(false);
  const [load_3, setLoad3] = useState(false);
  const [load_4, setLoad4] = useState(false);
  const [load_5, setLoad5] = useState(false);
  const [load_6, setLoad6] = useState(false);
  const [load_7, setLoad7] = useState(false);
  const [text_0, setText0] = useState('OFF');
  const [text_1, setText1] = useState('OFF');
  const [text_2, setText2] = useState('OFF');
  const [text_3, setText3] = useState('OFF');
  const [text_4, setText4] = useState('OFF');
  const [text_5, setText5] = useState('OFF');
  const [text_6, setText6] = useState('OFF');
  const [text_7, setText7] = useState('OFF');
  const isloadingVal = {loading: 'false'};

  const [switches, setSwitches] = useState(null);
  const [token, setToken] = useState(null);
  const [URL, setURL] = useState(route.params.url);
  const [switchloading_1, setSwitchloding_1] = useState(false);
  const [flag, setFlag] = useState(false);
  const [roomNum, setRoomNum] = useState(route.params.roomNum);
  const [roomname, setRoomname] = useState(route.params.roomName);

  //console.log(URL)
  //console.log(roomname)
  const getData = async () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          //alert('dddd')
          let data = JSON.parse(value);
          setToken(data.usertoken);
          console.log(data);
        }
      });
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    const getSwitch = async () => {
      //const response = await fetch(HOST);
      //console.log(token)
      fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then(response => response.json())
        .then(responseJson => {
          //let data = JSON.parse(responseJson)
          //console.log(responseJson);
          setSwitches(responseJson['data']);
          console.log(responseJson['data'].length);
          let len = responseJson['data'].length;
          //console.log(responseJson['data'][0])
          if (len > 0) {
            let pin0 = responseJson['data'][0]['switch_status'];
            let pin1 = responseJson['data'][1]['switch_status'];
            let pin2 = responseJson['data'][2]['switch_status'];
            let pin3 = responseJson['data'][3]['switch_status'];
            let pin4 = responseJson['data'][4]['switch_status'];
            console.log(pin1);
            if (pin0 == 1) {
              setText0('ON');
            } else {
              setText0('OFF');
            }
            if (pin1 == 1) {
              setText1('ON');
            } else {
              setText1('OFF');
            }
            if (pin2 == 1) {
              setText2('ON');
            } else {
              setText2('OFF');
            }
            if (pin3 == 1) {
              setText3('ON');
            } else {
              setText3('OFF');
            }
            if (pin4 == 1) {
              setText4('ON');
            } else {
              setText4('OFF');
            }
          }
          //let newData = Object.assign(switches,responseJson['data'][0]);

          //console.log(result);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getData();
    if (token != null || token != '') {
      getSwitch();
    }
    AsyncStorage.getItem(roomNum + '_switch0').then(value => {
      if (value === 'ON') {
        setText0('ON');
        console.log('0' + value);
      } else {
        setText0('OFF');
        console.log('0= ' + value);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch1').then(value => {
      if (value === 'ON') {
        setText1('ON');
        console.log('1 ' + value);
      } else {
        setText1('OFF');
        console.log('mkkjk= ' + value);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch2').then(value => {
      if (value === 'ON') {
        setText2('ON');
        console.log('2 ' + value);
      } else {
        setText2('OFF');
        console.log('mkkjk= ' + text_2);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch3').then(value => {
      if (value === 'ON') {
        setText3('ON');
        console.log('mkkjk= ' + text_3);
      } else {
        setText3('OFF');
        console.log('mkkjk= ' + text_3);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch4').then(value => {
      if (value === 'ON') {
        setText4('ON');
        console.log('mkkjk= ' + text_4);
      } else {
        setText4('OFF');
        console.log('mkkjk= ' + text_4);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch5').then(value => {
      if (value === 'ON') {
        setText5('ON');
        console.log('mkkjk= ' + text_5);
      } else {
        setText5('OFF');
        console.log('mkkjk= ' + text_5);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch6').then(value => {
      if (value === 'ON') {
        setText6('ON');
        console.log('6= ' + text_6);
      } else {
        setText6('OFF');
        console.log('6= ' + text_6);
      }
    });
    AsyncStorage.getItem(roomNum + '_switch7').then(value => {
      if (value === 'ON') {
        setText7('ON');
        console.log('7= ' + text_7);
      } else {
        setText7('OFF');
        console.log('7= ' + text_7);
      }
    });
  }, []);
  const getLoading = index => {
    if (index == 0) {
      return true;
    } else {
      return false;
    }
  };
  const switchControll = (index, myTxt) => {
    //console.log(index,status);
    //HOST = HOST+index;
    if (index == 0) {
      setLoad0(true);
    }
    if (index == 1) {
      setLoad1(true);
    }
    if (index == 2) {
      setLoad2(true);
    }
    if (index == 3) {
      setLoad3(true);
    }
    if (index == 4) {
      setLoad4(true);
    }
    if (index == 5) {
      setLoad5(true);
    }
    if (index == 6) {
      setLoad6(true);
    }
    if (index == 7) {
      setLoad7(true);
    }
    if (index == 'all') {
      setLoading(true);
    }

    setFlag(true);
    //console.log(index)
    setTimeout(() => {
      if (myTxt == 'OFF') {
        console.log(URL + '&switch_num=' + index + '&switch_status=1');
        fetch(URL + '&switch_num=' + index + '&switch_status=1', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        })
          .then(response => response.json())
          .then(responseJson => {
            //getData();
            if (responseJson['code'] == '1') {
              console.log(responseJson['data']);
            }
          })
          .catch(error => {
            console.error(error);
          });
        if (index == 0) {
          setText0('ON');
          AsyncStorage.setItem(roomNum + '_switch0', 'ON');
          setAllPins('OFF');
        }
        if (index == 1) {
          setText1('ON');
          AsyncStorage.setItem(roomNum + '_switch1', 'ON');
          setAllPins('OFF');
        }
        if (index == 2) {
          setText2('ON');
          AsyncStorage.setItem(roomNum + '_switch2', 'ON');
          setAllPins('OFF');
        }
        if (index == 3) {
          setText3('ON');
          AsyncStorage.setItem(roomNum + '_switch3', 'ON');
          setAllPins('OFF');
        }
        if (index == 4) {
          setText4('ON');
          AsyncStorage.setItem(roomNum + '_switch4', 'ON');
          setAllPins('OFF');
        }
        if (index == 5) {
          setText5('ON');
          AsyncStorage.setItem(roomNum + '_switch5', 'ON');
          setAllPins('OFF');
        }
        if (index == 6) {
          setText6('ON');
          AsyncStorage.setItem(roomNum + '_switch6', 'ON');
          setAllPins('OFF');
        }
        if (index == 7) {
          setText7('ON');
          AsyncStorage.setItem(roomNum + '_switch7', 'ON');
          setAllPins('OFF');
        }
        if (index == 'all') {
          setAllPins('ON');
          AsyncStorage.setItem(roomNum + '_switch9', 'ON');
          setText0('OFF');
          AsyncStorage.setItem(roomNum + '_switch0', 'OFF');
          setText1('OFF');
          AsyncStorage.setItem(roomNum + '_switch1', 'OFF');
          setText2('OFF');
          AsyncStorage.setItem(roomNum + '_switch2', 'OFF');
          setText3('OFF');
          AsyncStorage.setItem(roomNum + '_switch3', 'OFF');
          setText4('OFF');
          AsyncStorage.setItem(roomNum + '_switch4', 'OFF');
          setText5('OFF');
          AsyncStorage.setItem(roomNum + '_switch5', 'OFF');
          setText6('OFF');
          AsyncStorage.setItem(roomNum + '_switch6', 'OFF');
          setText7('OFF');
          AsyncStorage.setItem(roomNum + '_switch7', 'OFF');
        }
      } else {
        if (index == 0) {
          setText0('OFF');
          AsyncStorage.setItem(roomNum + '_switch0', 'OFF');
          setAllPins('ON');
        }
        if (index == 1) {
          setText1('OFF');
          AsyncStorage.setItem(roomNum + '_switch1', 'OFF');
          setAllPins('ON');
        }
        if (index == 2) {
          setText2('OFF');
          AsyncStorage.setItem(roomNum + '_switch2', 'OFF');
          setAllPins('ON');
        }
        if (index == 3) {
          setText3('OFF');
          AsyncStorage.setItem(roomNum + '_switch3', 'OFF');
          setAllPins('ON');
        }
        if (index == 4) {
          setText4('OFF');
          AsyncStorage.setItem(roomNum + '_switch4', 'OFF');
          setAllPins('ON');
        }
        if (index == 5) {
          setText5('OFF');
          AsyncStorage.setItem(roomNum + '_switch5', 'OFF');
          setAllPins('ON');
        }
        if (index == 6) {
          setText6('OFF');
          AsyncStorage.setItem(roomNum + '_switch6', 'OFF');
          setAllPins('ON');
        }
        if (index == 7) {
          setText7('OFF');
          AsyncStorage.setItem(roomNum + '_switch7', 'OFF');
          setAllPins('ON');
        }
        if (index == 'all') {
          setAllPins('OFF');
          AsyncStorage.setItem(roomNum + '_switch9', 'OFF');
          setText0('ON');
          AsyncStorage.setItem(roomNum + '_switch0', 'ON');
          setText1('ON');
          AsyncStorage.setItem(roomNum + '_switch1', 'ON');
          setText2('ON');
          AsyncStorage.setItem(roomNum + '_switch2', 'ON');
          setText3('ON');
          AsyncStorage.setItem(roomNum + '_switch3', 'ON');
          setText4('ON');
          AsyncStorage.setItem(roomNum + '_switch4', 'ON');
          setText5('ON');
          AsyncStorage.setItem(roomNum + '_switch5', 'ON');
          setText6('ON');
          AsyncStorage.setItem(roomNum + '_switch6', 'ON');
          setText7('ON');
          AsyncStorage.setItem(roomNum + '_switch7', 'ON');
        }
        console.log(URL + '&switch_num=' + index + '&switch_status=0');
        fetch(URL + '&switch_num=' + index + '&switch_status=0', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        })
          .then(response => response.json())
          .then(responseJson => {
            //getData();
            console.log(responseJson);
            if (responseJson['code'] == '1') {
              console.log(responseJson['data']);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
      setFlag(false);
      if (index == 0) {
        setLoad0(false);
      }
      if (index == 1) {
        setLoad1(false);
      }
      if (index == 2) {
        setLoad2(false);
      }
      if (index == 3) {
        setLoad3(false);
      }
      if (index == 4) {
        setLoad4(false);
      }
      if (index == 5) {
        setLoad5(false);
      }
      if (index == 6) {
        setLoad6(false);
      }
      if (index == 7) {
        setLoad7(false);
      }
      if (index == 'all') {
        setLoading(false);
      }
    }, 1500);
  };

  if (token == '' || token == null) {
    //getData();
    //getSwitch();
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#ff0000" />
      </View>
    );
  }
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
        <Text style={styles.pageTitle}>{roomname}</Text>

        <SpinnerButton
          buttonStyle={styles.buttonStyle1}
          isLoading={isLoading}
          disabled={flag}
          spinnerType="UIActivityIndicator"
          onPress={() => switchControll('all', allpins)}
          animationType={'flipInY'}
          indicatorCount={10}
          animateHeight={40}
          animateWidth={80}
          animateRadius={20}
          animatedDuration={300}
          spinnerColor={'#999999'}>
          <Text style={styles.buttonText}>All {allpins}</Text>
        </SpinnerButton>
      </View>

      <ScrollView
        style={{
          paddingBottom: 80,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          marginBottom: 60,
        }}>
        {/* <Text style={styles.livingroom}>Living Room</Text> */}
        {/* <View>
      <TouchableOpacity onPress={() => bs.current.snapTo(0)}><View><Text>Capture</Text></View></TouchableOpacity>
      </View> */}

        {/* display books from the API */}
        {switches &&
          switches.map((book, index) => {
            let myVar = '';
            let myTxt = '';
            if (index == 0) {
              myVar = load_0;
              myTxt = text_0;
            }
            if (index == 1) {
              myVar = load_1;
              myTxt = text_1;
            }
            if (index == 2) {
              myVar = load_2;
              myTxt = text_2;
            }
            if (index == 3) {
              myVar = load_3;
              myTxt = text_3;
            }
            if (index == 4) {
              myVar = load_4;
              myTxt = text_4;
            }
            if (index == 5) {
              myVar = load_5;
              myTxt = text_5;
            }
            if (index == 6) {
              myVar = load_6;
              myTxt = text_6;
            }
            if (index == 7) {
              myVar = load_7;
              myTxt = text_7;
            }
            if (book.switch_role == 1) {
              return (
                <View key={index} style={styles.switch}>
                  <Text style={styles.text}>{book.switch_name}</Text>

                  {/* <Switch disabled={flag} style={{ transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }}
              trackColor={{false: '#eeeeee', true: '#fee9dc'}}
              thumbColor={isOnn1 ? '#fb8d4e' : '#e5e5e5'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={ switch1OnOff}
              value={isOnn1}
            /> */}
                  <SpinnerButton
                    buttonStyle={styles.buttonStyle}
                    isLoading={myVar}
                    disabled={flag}
                    key={index}
                    buttonStyle={{
                      backgroundColor: myTxt == 'ON' ? '#fb8d4e' : '#eeeeee',
                      width: 60,
                      height: 35,
                      borderRadius: 20,
                      alignSelf: 'flex-end',
                    }}
                    spinnerType="BallIndicator"
                    onPress={() => switchControll(index, myTxt)}
                    animationType={'flipInY'}
                    indicatorCount={10}
                    animateHeight={35}
                    animateWidth={60}
                    animateRadius={20}
                    animatedDuration={400}
                    spinnerColor={myTxt == 'ON' ? '#fff' : '#000'}
                    ide={20}>
                    <Text
                      key={index}
                      style={{color: myTxt == 'ON' ? '#fff' : '#000'}}>
                      {myTxt}
                    </Text>
                  </SpinnerButton>
                </View>
              );
            }
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  editablefield: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  livingroom: {
    textAlign: 'center',
    fontSize: 28,
    color: 'red',
  },
  row: {
    flexDirection: 'row',
  },
  switch: {
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'rgba(255,255,255,1)',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    marginBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    opacity: 1,
  },
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
  buttonStyle: {
    alignSelf: 'flex-end',
    backgroundColor: '#fee9dc',
    width: 60,
    height: 35,
    borderRadius: 20,
  },
  textstyle: {
    fontSize: 14,
  },

  buttonStyle1: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    width: 80,
    height: 40,
    borderRadius: 20,
  },
  allSwitch: {
    position: 'relative',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    left: 0,
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -20,
    marginBottom: -20,
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

export default SwitchController;
