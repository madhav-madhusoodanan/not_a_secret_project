// import Reactotron from './src/config/Reactotron';
import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {
  LogBox,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Appearance,
} from 'react-native';

import {
  HomeFeedScreen,
  ExploreScreen,
  CreatePostScreen,
  NotificationScreen,
  ProfileScreen,
} from './src/screens';

import {Theme} from './src/constants/appTheme';
import {BottomTabs} from './src/components/BottomTabs';
import {HEADER_HEIGHT} from './src/utils';

LogBox.ignoreAllLogs();

const BAR_HEIGHT = StatusBar.currentHeight;
const Tab = createBottomTabNavigator();

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const AuthStack = createStackNavigator();

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
          <View style={styles.container}>
            <RootNavigation />
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const HomeStackNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeFeedScreen">
    <HomeStack.Screen component={HomeFeedScreen} name="HomeFeedScreen" />
  </HomeStack.Navigator>
);

const TabNavigation = () => (
  <BottomSheetModalProvider>
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen component={HomeStackNavigator} name="home" />
      <Tab.Screen component={ExploreScreen} name={'explore'} />
      <Tab.Screen component={CreatePostScreen} name={'createPost'} />
      <Tab.Screen component={NotificationScreen} name={'notifications'} />
      <Tab.Screen component={ProfileScreen} name={'you'} />
    </Tab.Navigator>
  </BottomSheetModalProvider>
);

const RootNavigation = () => {
  const {bottom, top} = useSafeAreaInsets();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen component={TabNavigation} name="Tabs" />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
