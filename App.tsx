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
  TouchableOpacity,
  Text,
} from 'react-native';

import {
  WelcomeScreen,
  PhoneScreen,
  OneTimePasswordScreen,
  NameScreen,
  PersonalInfoScreen,
  HomeFeedScreen,
  ExploreScreen,
  NotificationScreen,
  ProfileScreen,
} from './src/screens';

import DropDownIcon from '@iconscout/react-native-unicons/icons/uil-angle-down';
import SettingIcon from '@iconscout/react-native-unicons/icons/uil-setting';

import {Theme} from './src/constants/appTheme';
import {BottomTabs} from './src/components/BottomTabs';
import {HEADER_HEIGHT} from './src/utils';

LogBox.ignoreAllLogs();

const BAR_HEIGHT = StatusBar.currentHeight;
const Tab = createBottomTabNavigator();

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const OnboardingStack = createStackNavigator();

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

const OnboardingNavigation = () => (
  <OnboardingStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="WelcomeScreen">
    <OnboardingStack.Screen component={WelcomeScreen} name="WelcomeScreen" />
    <OnboardingStack.Screen component={PhoneScreen} name="PhoneScreen" />
    <OnboardingStack.Screen
      component={OneTimePasswordScreen}
      name="OneTimePasswordScreen"
    />
    <OnboardingStack.Screen component={NameScreen} name="NameScreen" />
    <OnboardingStack.Screen
      component={PersonalInfoScreen}
      name="PersonalInfoScreen"
    />
  </OnboardingStack.Navigator>
);

const TabNavigation = () => (
  <Tab.Navigator
    tabBar={props => <BottomTabs {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: Theme.colors.background,
      },
      headerTintColor: Theme.colors.text,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 24,
      },
    }}>
    <Tab.Screen
      component={HomeStackNavigator}
      name="home"
      options={{
        title: 'Welcome 👋',
        headerRight: props => (
          <TouchableOpacity
            style={{
              // paddingVertical: 5,
              alignItems: 'center',
              marginRight: 16,
              alignSelf: 'flex-end',
              flexDirection: 'row',
            }}
            onPress={() => console.log('Goal Selection Dropdown Pressed')}>
            <DropDownIcon size="28" color="#081c15" />
            <Text
              style={{
                fontFamily: 'Gilroy-Bold',
                color: '#007f5f',
                fontSize: 24,
                marginLeft: 6,
              }}>
              IITJEE
            </Text>
          </TouchableOpacity>
        ),
      }}
    />
    <Tab.Screen
      component={ExploreScreen}
      name={'explore'}
      options={{
        title: 'Explore',
        headerShown: false,
      }}
    />

    <Tab.Screen
      component={NotificationScreen}
      name={'notifications'}
      options={{title: 'Notifications'}}
    />
    <Tab.Screen
      component={ProfileScreen}
      name={'you'}
      options={{
        title: 'Profile',
        headerRight: props => (
          <TouchableOpacity
            style={{
              // paddingVertical: 5,
              alignItems: 'center',
              marginRight: 16,
              alignSelf: 'flex-end',
              flexDirection: 'row',
            }}
            onPress={() => console.log('Setting Button Pressed')}>
            <SettingIcon size="24" color="#081c15" />
          </TouchableOpacity>
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigation = () => {
  const {bottom, top} = useSafeAreaInsets();

  return (
    <BottomSheetModalProvider>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen component={OnboardingNavigation} name="Auth" />
        <RootStack.Screen component={TabNavigation} name="Tabs" />
      </RootStack.Navigator>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
