import React, {useEffect, useState} from 'react';
import {appTheme, styles} from '../Themes';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function LandingPage() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [showPopup, setShowPopup] = useState(false);
  const [opacityValue] = useState(new Animated.Value(0)); // Declare opacityValue as a state variable

  const buttonDisabled = true; // Set to true to disable the button

  const handlePress = () => {
    if (!buttonDisabled) {
      navigation.navigate('ChooseRoleForSignUp');
    } else {
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
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup function to reset the opacity value when component unmounts
      opacityValue.setValue(0);
    };
  }, [opacityValue]);
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
              Sign Up Coming Soon
            </Text>
          </View>
        </Animated.View>
      )}
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
          Welcome to Nactuz!
        </Text>
        <Text
          style={{
            fontFamily: styles.poppinsLight.fontFamily,
            textDecorationLine: 'underline',
            fontSize: 17,
            marginTop: -15,
            color: appTheme.textColor,
            textAlign: 'center',
          }}>
          Empowering Teachers & Students
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '68%',
            gap: 10,
            backgroundColor: appTheme.buttonColor,
            borderRadius: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseRoleForLogin')}>
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-110%',
        }}>
        <View
          style={{
            width: '68%',
            gap: 10,
            backgroundColor: buttonDisabled ? '#cccccc' : appTheme.buttonColor,
            borderRadius: 5,
          }}>
          <TouchableOpacity onPress={handlePress}>
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
      </View>
    </SafeAreaView>
  );
}

export default LandingPage;
