import React from 'react';
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
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
function ChooseRoleForSignUp() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={{backgroundColor: appTheme.mainColor, flex: 1}}>
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
            backgroundColor: appTheme.buttonColor,
            borderRadius: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpPageForTeacher')}>
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
            onPress={() => navigation.navigate('SignUpPageForStudent')}>
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

export default ChooseRoleForSignUp;
