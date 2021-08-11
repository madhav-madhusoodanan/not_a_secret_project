// import Reactotron from './src/config/Reactotron';
import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {
  LogBox,
  View,
  StatusBar,
  Appearance,
} from 'react-native';
import {Theme} from './src/constants/appTheme';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';

LogBox.ignoreAllLogs();

const RootStack = createStackNavigator();

export default () => {
  const scheme = Appearance.getColorScheme();

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          barStyle="dark-content"
          backgroundColor={Theme.colors.background}
        />
        <NavigationContainer theme={Theme}>
          <View style={{flex: 1}}>
            <RootNavigation />
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const RootNavigation = () => {
  return (
    <BottomSheetModalProvider>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen component={AuthNavigator} name="Auth" />
        <RootStack.Screen component={HomeNavigator} name="Home" />
      </RootStack.Navigator>
    </BottomSheetModalProvider>
  );
};
