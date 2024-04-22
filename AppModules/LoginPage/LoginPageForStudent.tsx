import React, {useState} from 'react';
import {appTheme, styles} from '../../Themes';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import BackButton from '../../ReusableComponents/BackButton';
import {StudentCredentials} from '../../Database/LoginCreds';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function LoginPageForStudent() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [emailPhoneNumber, setemailPhoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [opacityValue] = useState(new Animated.Value(0)); // Declare opacityValue as a state variable

  const handleLogin = () => {
    // Check if any credentials match the provided email or phone
    const student = StudentCredentials.find(
      cred =>
        cred.email === emailPhoneNumber || cred.phone === emailPhoneNumber,
    );

    if (student) {
      // If a matching student is found, verify the password
      if (student.password === password) {
        // Password matched, perform login actions here
        console.log('Login successful');
        setemailPhoneNumber('');
        setpassword('');
        navigation.navigate('StudentHomePage');
      } else {
        console.log('Login failed-1');
        setShowPopup(true);
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
        setTimeout(() => {
          Animated.timing(opacityValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => setShowPopup(false));
        }, 3000); // 3 seconds
        return false;
      }
    } else {
      console.log('Login failed-2');
      setShowPopup(true);
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setShowPopup(false));
      }, 3000); // 3 seconds
      return false;
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: appTheme.mainColor, flex: 1}}>
      {showPopup && (
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            zIndex: 9999999,
            position: 'absolute',
            // marginLeft: '10%',
            // marginRight: '10%',
            alignSelf: 'center',
            marginTop: '10%',
            opacity: opacityValue,
          }}>
          <View
            style={{
              backgroundColor: appTheme.searchBackgroundColor,
              padding: 5,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: appTheme.buttonColor,
                textAlign: 'center',
                fontSize: 20,
              }}>
              email or password is incorrect
            </Text>
          </View>
        </Animated.View>
      )}
      <View>
        <BackButton />
      </View>
      <View>
        <Text
          style={{
            fontFamily: styles.poppinsBold.fontFamily,
            color: appTheme.textColor,
            textAlign: 'center',
            fontSize: 28,
            marginTop: '50%',
            textShadowColor: appTheme.buttonColor,
            textShadowOffset: {width: 3, height: 3},
            textShadowRadius: 1,
          }}>
          Login As A Student
        </Text>
      </View>
      <View
        style={{
          width: '68%',
          flex: 1,
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 0,
          gap: -40,
        }}>
        <View style={{paddingHorizontal: 20, marginTop: '15%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              value={emailPhoneNumber}
              onChangeText={text => {
                // Restricting input to valid email characters
                const filteredText = text.replace(/[^a-zA-Z0-9@._-]/g, '');
                // Applying text limit for email
                setemailPhoneNumber(filteredText.slice(0, 50)); // Limiting to 50 characters
              }}
              placeholder="email / phone number"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                color: '#fff',
                height: 40, // Set a fixed height
              }}
              multiline={false} // Disable multiline
            />
            <Image
              style={{width: 20, height: 20, marginRight: 5}} // Add spacing between input and icon
              source={require('../../Assets/images/email.png')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -5,
              width: '100%',
            }}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: '20%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              value={password}
              onChangeText={setpassword}
              placeholder="password"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
                height: 40, // Set a fixed height
              }}
              secureTextEntry={true} // Hide the password characters
              multiline={false} // Disable multiline
            />

            <Image
              style={{width: 30, height: 30, marginLeft: 10}} // Add spacing between input and icon
              source={require('../../Assets/images/material-symbols-light_key-vertical-outline.png')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -5,
              width: '100%',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-220%',
        }}>
        <View
          style={{
            width: '68%',
            gap: 10,
            backgroundColor: appTheme.buttonColor,
            borderRadius: 5,
          }}>
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontFamily: styles.poppinsBold.fontFamily,
                color: appTheme.textColor,
                textAlign: 'center',
                marginTop: 3,
                fontSize: 24,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginPageForStudent;
