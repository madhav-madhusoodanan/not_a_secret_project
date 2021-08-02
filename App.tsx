// import Reactotron from './src/config/Reactotron';
import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {StreamApp} from 'react-native-activity-feed';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {
  ActivityIndicator,
  Alert,
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
import useStreamChatTheme from './src/hooks/useStreamChatTheme';

LogBox.ignoreAllLogs();

const BAR_HEIGHT = StatusBar.currentHeight;
const Tab = createBottomTabNavigator();

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ModalStack = createStackNavigator();
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
            <StreamApp
              apiKey="r249dw973zfa"
              appId="1133749"
              token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYmxhY2stcG9uZC0yIn0.POPurfP9551qegOVXF_pQJTcN280w8pLEkm4xR7BoQY">
              <RootNavigation />
            </StreamApp>
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const HomeStackNavigator = () => (
  <HomeStack.Navigator initialRouteName="HomeFeedScreen">
    <HomeStack.Screen
      component={HomeFeedScreen}
      name="HomeFeedScreen"
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

const TabNavigation = () => (
  <BottomSheetModalProvider>
    <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen component={HomeStackNavigator} name="home" />
      <Tab.Screen component={ExploreScreen} name={'explore'} />
      <Tab.Screen component={CreatePostScreen} name={'createPost'} />
      <Tab.Screen component={NotificationScreen} name={'notifications'} />
      <Tab.Screen component={ProfileScreen} name={'you'} />
    </Tab.Navigator>
  </BottomSheetModalProvider>
);

const RootNavigation = () => {
  const chatStyles = useStreamChatTheme();
  const {bottom, top} = useSafeAreaInsets();

  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        component={TabNavigation}
        name="Tabs"
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
  container: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
});
