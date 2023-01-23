import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigator from './BottomTabNavigator';
import IntroScreen from '../screens/IntroScreen'
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import OtpScreen from '../screens/OtpScreen';
import StartScreen from '../screens/StartScreen';
import GetReadyScreen from '../screens/GetReadyScreen';


export default function Navigation({ colorScheme, viewedOnboarding }: { colorScheme: ColorSchemeName,  viewedOnboarding: any }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ viewedOnboarding }: any) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <Stack.Navigator>
      {loggedIn ? null : (
      <>
        <Stack.Screen
        name= "Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "SigninScreen"
        component={SigninScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name= "GetReadyScreen"
        component={GetReadyScreen}
        options={{ headerShown: false }}
        />
        {/*
        <Stack.Screen
        name= "IsSignUPScreen"
        component={Login_Screen}
        options={{ headerShown: false }}
        />  */}
      </>
    )}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
