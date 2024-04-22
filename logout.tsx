import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from 'react-native';
import {appTheme, styles} from './Themes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import BackButton from './ReusableComponents/BackButton';

function LogoutPage() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function logoutFunction() {
    setShowConfirmation(true);
  }

  function confirmLogout() {
    navigation.navigate('LoginPageForStudent');
  }

  function cancelLogout() {
    setShowConfirmation(false);
  }

  return (
    <SafeAreaView style={{backgroundColor: appTheme.mainColor, flex: 1}}>
      <BackButton />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '68%',
            gap: 10,
            borderRadius: 5,
            backgroundColor: appTheme.buttonColor,
          }}>
          <TouchableOpacity onPress={logoutFunction}>
            <Text
              style={{
                fontFamily: styles.poppinsBold.fontFamily,
                color: appTheme.textColor,
                textAlign: 'center',
                marginTop: 3,
                fontSize: 24,
              }}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showConfirmation}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowConfirmation(!showConfirmation);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: appTheme.searchBackgroundColor,
              borderWidth: 1,
              borderColor: appTheme.buttonColor,
              padding: 20,
              borderRadius: 10,
              width: '80%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
                color: 'white',
                textAlign: 'center',
              }}>
              Are you sure you want to logout ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity onPress={confirmLogout}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: styles.poppinsBold.fontFamily,
                    width: 50,
                    height: 50,
                    padding: 4,
                    borderRadius: 100,
                    textAlign: 'center',
                    paddingTop: 10,
                    color: 'white',
                    backgroundColor: 'red',
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelLogout}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: styles.poppinsBold.fontFamily,
                    width: 50,
                    height: 50,
                    padding: 4,
                    borderRadius: 100,
                    textAlign: 'center',
                    paddingTop: 10,
                    color: 'white',
                    backgroundColor: 'green',
                  }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default LogoutPage;
