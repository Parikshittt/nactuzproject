import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {appTheme} from '../Themes';
import {useNavigation} from '@react-navigation/native';

function CommonDock() {
  const navigation: any = useNavigation();

  const navigateToHomePage = () => {
    navigation.navigate('StudentHomePage');
  };

  const navigateToTestPage = () => {
    navigation.navigate('StudentTestPage');
  };

  const navigateToDoubtsPage = () => {
    navigation.navigate('StudentDoubtsPage');
  };

  const navigateToLogoutPage = () => {
    navigation.navigate('LogoutPage');
  };
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80, // Adjust the height as per your requirement
        backgroundColor: appTheme.dockBackgroundColor,
        flexDirection: 'row', // If you want to add multiple buttons horizontally
        justifyContent: 'space-between', // Or any other justifying option
        alignItems: 'center', // Align items in the center vertically
      }}>
      <TouchableOpacity onPress={navigateToLogoutPage}>
        <View
          style={{
            backgroundColor: appTheme.dockButtonFillColor,
            width: 70,
            height: 50,
            borderTopEndRadius: 100,
            borderBottomEndRadius: 100,
            borderColor: appTheme.dockBorderColor,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 3,
          }}>
          <Image
            style={{height: 42, aspectRatio: 1, borderRadius: 50}}
            source={require('../Assets/images/pfp.png')}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToDoubtsPage}>
        <View
          style={{
            backgroundColor: appTheme.dockButtonFillColor,
            width: 50,
            height: 50,
            borderRadius: 100,
            borderColor: appTheme.dockBorderColor,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 42, aspectRatio: 1, borderRadius: 50}}
            source={require('../Assets/images/DoubtIcon.png')}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToHomePage}>
        <View
          style={{
            backgroundColor: appTheme.dockButtonFillColor,
            width: 50,
            height: 50,
            borderRadius: 100,
            borderColor: appTheme.dockBorderColor,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 42, aspectRatio: 1, borderRadius: 50}}
            source={require('../Assets/images/HomeIcon.png')}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToTestPage}>
        <View
          style={{
            backgroundColor: appTheme.dockButtonFillColor,
            width: 50,
            height: 50,
            borderRadius: 100,
            borderColor: appTheme.dockBorderColor,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 42, aspectRatio: 1, borderRadius: 50}}
            source={require('../Assets/images/TestIcon.png')}></Image>
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: appTheme.dockButtonFillColor,
          width: 70,
          height: 50,
          borderTopStartRadius: 100,
          borderBottomStartRadius: 100,
          borderColor: appTheme.dockBorderColor,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: 3,
        }}>
        <Image
          style={{height: 42, aspectRatio: 1, borderRadius: 50}}
          source={require('../Assets/images/cart.png')}></Image>
      </View>
    </View>
  );
}

export default CommonDock;
