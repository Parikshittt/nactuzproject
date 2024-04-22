import React, {useState} from 'react';
import {appTheme, styles} from '../../Themes';
import BackButton from '../../ReusableComponents/BackButton';
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

function ChooseRoleForLogin() {
  const [showPopup, setShowPopup] = useState(false);
  const [opacityValue] = useState(new Animated.Value(0)); // Declare opacityValue as a state variable
  const navigation = useNavigation<NavigationProp<any>>();
  const buttonDisabled = true;
  function handleButtonClickForDisabledTeacher() {
    if (!buttonDisabled) {
      navigation.navigate('LoginPageForTeacher');
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
  }
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
              Teacher Portal Coming Soon
            </Text>
          </View>
        </Animated.View>
      )}
      {/* Back Button  */}
      <View>
        <BackButton />
      </View>
      {/* Back Button  */}
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
          What is your role ?
        </Text>
        <Text
          style={{
            fontFamily: styles.poppinsLight.fontFamily,
            textDecorationLine: 'underline',
            fontSize: 17,
            marginTop: '10%',
            color: appTheme.textColor,
            textAlign: 'center',
          }}>
          I am a
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-100%',
        }}>
        <View
          style={{
            width: '68%',
            gap: 10,
            borderRadius: 5,
            backgroundColor: buttonDisabled ? '#cccccc' : appTheme.buttonColor,
          }}>
          <TouchableOpacity onPress={handleButtonClickForDisabledTeacher}>
            <Text
              style={{
                fontFamily: styles.poppinsBold.fontFamily,
                color: appTheme.textColor,
                textAlign: 'center',
                marginTop: 3,
                fontSize: 24,
              }}>
              Teacher
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '68%',
            gap: 10,
            backgroundColor: appTheme.buttonColor,
            borderRadius: 5,
            marginTop: 10, // Adjust the gap between buttons
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginPageForStudent')}>
            <Text
              style={{
                fontFamily: styles.poppinsBold.fontFamily,
                color: appTheme.textColor,
                textAlign: 'center',
                marginTop: 3,
                fontSize: 24,
              }}>
              Student
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ChooseRoleForLogin;
