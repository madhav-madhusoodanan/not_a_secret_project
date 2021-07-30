// import Reactotron from './src/config/Reactotron';
import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {
  ActivityIndicator,
  Alert,
  LogBox,
  StyleSheet,
  View,
  Appearance,
} from 'react-native';

import {
  Phone,
  Explore,
  Home,
  Profile,
  Welcome,
  OneTimePassword,
} from './src/screens';

import {Theme} from './src/constants/appTheme';
import {BottomTabs} from './src/components/BottomTabs';
import {HEADER_HEIGHT} from './src/utils';

export type RootStackParamList = {
  Phone: undefined;
  Home: undefined;
  Welcome: undefined;
  OneTimePassword: undefined;
};

export type BottomNavigationStackParamList = {
  Home: undefined;
  Profile: undefined;
  Explore: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomNavigationStackParamList>();

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="OneTimePassword" component={OneTimePassword} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
