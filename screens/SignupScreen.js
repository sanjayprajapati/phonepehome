import React, {useState,useCallback,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Picker
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../components/context';
import {isValidEmail, isValidObjField, updateError} from '../utils/methods';
import SelectDropdown from 'react-native-select-dropdown'
import {windowHeight, windowWidth} from '../utils/Dimentions';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SignupScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    CId:'',
  });
 
  const city = [];
  const cityId = [];
  const [cities, setCities] = useState([]);
  const [citiesId, setCityId] = useState([]);
  const getCity    =()=> {
    fetch('http://origin8solutions.com/getCity.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    })
    .then(response => response.json())
    .then(responseJson => {
      // Showing response message coming from server after inserting records.
      //console.log(responseJson.data);
      //setCities(responseJson.data);
      let data = responseJson.data;
      //console.log(data[0]['id']);
      //setCities(responseJson.data);
      var count1 = Object.keys(data).length;
      let drop_down_data = [];
      console.log(count1)
            for (var i = 0; i < count1 ; i++) {
                console.log(data[i]);
              //console.log(responseJson.data[i].id);
                //console.log(responseJson.data[i].city_name); // I need to add 
                //setCities([responseJson.data[i].city_name]);
                city.push(
                  data[i].city_name
               ); // Create your array of data
               citiesId.push(data[i].id);
            }
            setCities(city);
            setCityId(citiesId);
    })
    .catch(error => {
      console.error(error);
    });
  }
  const plan = [];
  const planId = [];
  const [plans, setPlans] = useState([]);
  const [plansId, setPlansId] = useState([]);
  const getPlan    =()=> {
    fetch('http://origin8solutions.com/getPlan.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    })
    .then(resp => resp.json())
    .then(respJson => {
      // Showing response message coming from server after inserting records.
      //console.log(respJson);
      let data = respJson.data;
      //console.log(data[0]['id']);
      //setCities(responseJson.data);
      var count1 = Object.keys(data).length;
      let drop_down_data = [];
      console.log(count1)
            for (var i = 0; i <= 5; i++) {
                console.log(data[i]);
                //console.log(responseJson.data[i].appartment_name); // I need to add 
                //setCities([responseJson.data[i].city_name]);
                plan.push([data[i].appartment_name]);
                // Create your array of data
                planId.push([data[i].id]);
            }
            setPlans(plan);
            setPlansId(planId);
    })
    .catch(error => {
      console.error(error);
    });
  }


  useEffect(() => {
    getCity();
    getPlan();
    //console.log(city);
  }, []);

  const [error, setError] = useState('');

  const {name, email, password, confirmPassword, phoneNumber,CId,PlanId} =
    userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    console.log(userInfo);
    // we will accept only if all of the fields have value
    if (isValidObjField(userInfo))
      return updateError('Required all fields!', setError);
    // if valid name with 3 or more characters
    if (name==null || name.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    // password must have 8 or more characters
    if (password==null || password.length < 8)
      return updateError('Password is less then 8 characters!', setError);
    // password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);

    if (
      phoneNumber ==null  ||
      phoneNumber.length < 10 ||
      phoneNumber.length > 10
    )
      return updateError('Phone no. must be 10 character long', setError);

    return true;
  };
  //const {register} = useContext(AuthContext);
  const submitForm = () => {
    if (isValidForm()) {
      fetch('http://origin8solutions.com/registrationapi.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          phone: phoneNumber,
          CId: CId,
          PlanId: PlanId,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          // Showing response message coming from server after inserting records.
          console.log(responseJson);
          navigation.navigate('Login');
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.keyboard}>
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.scrollView} bounces={false}>
        <View style={styles.container}>
          <Text style={styles.text}>Create an account</Text>
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

          {/*Name Field */}
          <FormInput
            labelValue={name}
            onChangeText={value => handleOnChangeText(value, 'name')}
            placeholderText="Name"
            iconType="user"
            keyboardType="default"
            autoCorrect={false}
          />

          {/*Email Field*/}
          <FormInput
            labelValue={email}
            onChangeText={value => handleOnChangeText(value, 'email')}
            placeholderText="Email"
            iconType="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {/*Phone Number Field */}
          <FormInput
            labelValue={phoneNumber}
            onChangeText={value => handleOnChangeText(value, 'phoneNumber')}
            placeholderText="Phone Number"
            iconType="phone"
            keyboardType="number-pad"
          />
          {/* City Dropbox */}
          <SelectDropdown
            buttonStyle={styles.selectbox}
            defaultButtonText={"Select City"}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            data={cities}
            //value={cityName}
            onSelect={(selectedItem, index) => {
             // console.log(selectedItem, index)
              handleOnChangeText(index, 'CId')
            }}
            //onChangeText={index => handleOnChangeText(index, 'CId')}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#999"} size={16} />
              );
            }}
            //onChangeText={value => handleOnChangeText(value, 'CId')}
          />
          {/* Get Plan*/}
          <SelectDropdown
            buttonStyle={styles.selectbox}
            defaultButtonText={"Select a Plan"}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            data={plans}
            //value={cityName}
            onSelect={(selectedItem, index) => {
             // console.log(selectedItem, index)
              handleOnChangeText(index, 'PlanId')
            }}
            //onChangeText={index => handleOnChangeText(index, 'CId')}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={"#999"} size={16} />
              );
            }}
            dropdownIconPosition={"right"}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            //onChangeText={value => handleOnChangeText(value, 'CId')}
          />

          {/*Password Field*/}
          <FormInput
            labelValue={password}
            onChangeText={value => handleOnChangeText(value, 'password')}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />

          {/*Confirm Password Field */}
          <FormInput
            labelValue={confirmPassword}
            onChangeText={value => handleOnChangeText(value, 'confirmPassword')}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
          />



          {/*Signup Button*/}
          <FormButton buttonTitle="Sign Up" onPress={submitForm} />

          {/*Terms and Condition Button */}
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our{' '}
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <TouchableOpacity onPress={() => alert('Privacy Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>

          {/*Already Having Account Button*/}
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
    
  },
  scrollView: {
  },
  keyboard: {
  },
  selectbox: {
    marginTop: 5,
    marginBottom: 10,
    width: 320,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  dropdown1BtnTxtStyle: {
    fontWeight:'normal',
    color:'#333',
    fontSize: 14,
    textAlign: "left",
  }
});
