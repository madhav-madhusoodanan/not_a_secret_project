// import Reactotron from './src/config/Reactotron';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Phone,
  Explore,
  Home,
  Profile,
  Welcome,
  OneTimePassword,
} from './src/screens';

import {theme} from './src/constants/theme';

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
    <PaperProvider theme={theme}>
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
