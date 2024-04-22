import React, {useState} from 'react';
import {appTheme, styles} from '../../Themes';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackButton from '../../ReusableComponents/BackButton';

function LoginPageForTeacher() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: appTheme.mainColor, flex: 1}}>
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
          Login As A Teacher
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
              value={text}
              onChangeText={setText}
              placeholder="email / phone number"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
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
              value={text}
              onChangeText={setText}
              placeholder="password"
              placeholderTextColor="#FFFFFF73"
              style={{
                fontFamily: styles.poppinsRegular.fontFamily,
                fontSize: 12,
                flex: 1,
                color: '#fff',
              }}
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
          <TouchableOpacity>
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

export default LoginPageForTeacher;
