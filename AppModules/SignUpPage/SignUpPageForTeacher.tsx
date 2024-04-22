import React, {useState} from 'react';
import {appTheme, styles} from '../../Themes';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BackButton from '../../ReusableComponents/BackButton';

function SignUpPageForTeacher() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordTouched(true);
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setConfirmPasswordTouched(true);
  };

  const isStrongPassword = (text: string) => {
    // Password must have at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(text);
  };

  const doPasswordsMatch = () => {
    return password === confirmPassword;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailTouched(true);
  };

  const isValidEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    setPhoneTouched(true);
  };

  const isValidPhoneNumber = (text: string) => {
    // Basic phone number validation: must contain only digits and have a length of 10 digits
    return /^\d{10}$/.test(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{backgroundColor: appTheme.mainColor, flex: 1}}>
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
          Sign Up As A Teacher
        </Text>
      </View>
      <View
        style={{
          width: 270,
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
              value={email}
              onChangeText={handleEmailChange}
              placeholder="email"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
            />
            {!emailTouched && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/email.png')}
              />
            )}
            {emailTouched && !isValidEmail(email) && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/invalid.png')}
              />
            )}
            {emailTouched && isValidEmail(email) && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/valid.png')}
              />
            )}
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -6,
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
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              placeholder="phone number"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
            />
            {!phoneTouched && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/phone.png')}
              />
            )}
            {phoneTouched && !isValidPhoneNumber(phoneNumber) && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/invalid.png')}
              />
            )}
            {phoneTouched && isValidPhoneNumber(phoneNumber) && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/valid.png')}
              />
            )}
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -6,
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
              onChangeText={handlePasswordChange}
              placeholder="Password"
              placeholderTextColor="#FFFFFF73"
              secureTextEntry={true}
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
            />
            {!passwordTouched && (
              <Image
                style={{width: 30, height: 30, marginLeft: 10}}
                source={require('../../Assets/images/material-symbols-light_key-vertical-outline.png')}
              />
            )}
            {passwordTouched && !isStrongPassword(password) && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/invalid.png')}
              />
            )}
            {passwordTouched && isStrongPassword(password) && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/valid.png')}
              />
            )}
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -6,
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
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              placeholderTextColor="#FFFFFF73"
              secureTextEntry={true}
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
            />
            {!confirmPasswordTouched && (
              <Image
                style={{width: 30, height: 30, marginLeft: 10}}
                source={require('../../Assets/images/material-symbols-light_key-vertical-outline.png')}
              />
            )}
            {confirmPasswordTouched && !doPasswordsMatch() && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/invalid.png')}
              />
            )}
            {confirmPasswordTouched && doPasswordsMatch() && (
              <Image
                style={{width: 20, height: 20, marginRight: 5}}
                source={require('../../Assets/images/valid.png')}
              />
            )}
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -6,
              width: '100%',
            }}
          />
        </View>
        {/* <View style={{paddingHorizontal: 20, marginTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              value={adhaarFront}
              onChangeText={setAdhaarFront}
              placeholder="upload Adhaar Card front"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
            />
            <Image
              style={{width: 16, height: 16, marginRight: 5}} // Add spacing between input and icon
              source={require('../Assets/images/Vector.png')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -6,
              width: '100%',
            }}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              value={adhaarBack}
              onChangeText={setAdhaarBack}
              placeholder="upload Adhaar Card back"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
            />
            <Image
              style={{width: 16, height: 16, marginRight: 5}} // Add spacing between input and icon
              source={require('../Assets/images/Vector.png')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#f32c32',
              marginTop: -6,
              width: '100%',
            }}
          />
        </View> */}
      </View>
      <HideWithKeyboard>
        <KeyboardAvoidingView
          behavior="height"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-140%',
          }}>
          <View
            style={{
              width: '68%',
              gap: 10,
              backgroundColor: appTheme.buttonColor,
              borderRadius: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: styles.poppinsBold.fontFamily,
                  color: appTheme.textColor,
                  textAlign: 'center',
                  marginTop: 3,
                  fontSize: 24,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </HideWithKeyboard>
    </KeyboardAvoidingView>
  );
}

export default SignUpPageForTeacher;
