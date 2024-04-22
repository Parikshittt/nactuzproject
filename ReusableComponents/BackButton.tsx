// BackButton.js

import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {appTheme} from '../Themes';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function BackButton() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{position: 'absolute', marginTop: '30%', left: 0, zIndex: 999}}>
      <Image
        style={{width: 88, height: 44}}
        source={require('../Assets/images/BackButton.png')}
      />
    </TouchableOpacity>
  );
}

export default BackButton;
