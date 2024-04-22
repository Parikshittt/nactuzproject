// App.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './AppModules/LandingPage';
import ChooseRoleForSignUp from './AppModules/ChooseRole/ChooseRoleForSignUp';
import ChooseRoleForLogin from './AppModules/ChooseRole/ChooseRoleForLogin';
import SignUpPageForTeacher from './AppModules/SignUpPage/SignUpPageForTeacher';
import LoginPageForTeacher from './AppModules/LoginPage/LoginPageForTeacher';
import LoginPageForStudent from './AppModules/LoginPage/LoginPageForStudent';
import SignUpPageForStudent from './AppModules/SignUpPage/SignUpPageForStudent';
import {TransitionPresets} from '@react-navigation/stack';
import StudentHomePage from './AppModules/StudentApp/studentHome';
import StudentTest from './AppModules/StudentApp/studentTest';
import StudentDoubtsPage from './AppModules/StudentApp/studentDoubts';
import {useContext} from 'react';
import LogoutPage from './logout';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LandingPage'}>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="ChooseRoleForSignUp"
          component={ChooseRoleForSignUp}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="ChooseRoleForLogin"
          component={ChooseRoleForLogin}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="LoginPageForTeacher"
          component={LoginPageForTeacher}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="LoginPageForStudent"
          component={LoginPageForStudent}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="SignUpPageForTeacher"
          component={SignUpPageForTeacher}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="SignUpPageForStudent"
          component={SignUpPageForStudent}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="StudentHomePage"
          component={StudentHomePage}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="StudentTestPage"
          component={StudentTest}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="StudentDoubtsPage"
          component={StudentDoubtsPage}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="LogoutPage"
          component={LogoutPage}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.BottomSheetAndroid,
            gestureDirection: 'horizontal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
