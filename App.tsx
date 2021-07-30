// import Reactotron from './src/config/Reactotron';
import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Chat, OverlayProvider} from 'stream-chat-react-native';
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
  HomeFeedScreen,
  ExploreScreen,
  CreatePostScreen,
  NotificationScreen,
  ProfileScreen,
} from './src/screens';

import {Theme} from './src/constants/appTheme';
import {BottomTabs} from './src/components/BottomTabs';
import {VerseAppContext} from './src/contexts/VerseAppContext';
import {HEADER_HEIGHT} from './src/utils';
import useStreamChatTheme from './src/hooks/useStreamChatTheme';

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ModalStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default () => {
  const scheme = Appearance.getColorScheme();

  return (
    <PaperProvider theme={Theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <VerseAppContext.Provider
              value={
                {
                  // activeChannel,
                  // activeMessage,
                  // openUserPicker,
                  // setActiveChannel,
                  // setActiveMessage,
                  // switchUser: userId => {
                  //   /**
                  //    * Dev token generations will only work in case of development mode.
                  //    * So please make sure you have auth check disabled, if you are planning to
                  //    * check user picker feature.
                  //    */
                  //   const token = chatClient.devToken(userId);
                  //   setCurrentUser({
                  //     id: userId,
                  //     token,
                  //   }),
                  //     setUserPickerVisible(false);
                  // },
                }
              }>
              <RootNavigation />
              {/* <UserPickerModal
                label={'name'}
                modalVisible={userPickerVisible}
                onRequestClose={closeUserPicker}
                onValueChange={closeUserPicker}
              /> */}
            </VerseAppContext.Provider>
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const ModalStackNavigator = () => (
  <ModalStack.Navigator>
    {/* <ModalStack.Screen
      component={ChannelSearchScreen}
      name="ChannelSearchScreen"
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      component={JumpToSearchScreen}
      name="JumpToSearchScreen"
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      component={NewMessageScreen}
      name="NewMessageScreen"
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      component={ShareMessageScreen}
      name="ShareMessageScreen"
      options={{headerShown: false}}
    /> */}
  </ModalStack.Navigator>
);

const HomeStackNavigator = () => (
  <HomeStack.Navigator initialRouteName="HomeFeedScreen">
    <HomeStack.Screen
      component={HomeFeedScreen}
      name="HomeFeedScreen"
      options={{headerShown: false}}
    />
    {/*  <HomeStack.Screen
      component={ChannelScreen}
      name="ChannelScreen"
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      component={DraftsScreen}
      name="DraftsScreen"
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      component={ThreadScreen}
      name="ThreadScreen"
      options={{headerShown: false}}
    /> */}
  </HomeStack.Navigator>
);

const TabNavigation = () => (
  <BottomSheetModalProvider>
    <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen component={HomeStackNavigator} name="home" />
      <Tab.Screen component={ExploreScreen} name={'dms'} />
      <Tab.Screen component={CreatePostScreen} name={'mentions'} />
      <Tab.Screen component={NotificationScreen} name={'search'} />
      <Tab.Screen component={ProfileScreen} name={'you'} />
    </Tab.Navigator>
  </BottomSheetModalProvider>
);

const RootNavigation = () => {
  const chatStyles = useStreamChatTheme();
  const {bottom, top} = useSafeAreaInsets();

  return (
    <OverlayProvider bottomInset={bottom + HEADER_HEIGHT} topInset={top}>
      {/* <Chat client={ChatClientStore.client} style={chatStyles}> */}
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          component={TabNavigation}
          name="Tabs"
          options={{headerShown: false}}
        />
        <RootStack.Screen
          component={ModalStackNavigator}
          name={'Modals'}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
      {/* </Chat> */}
    </OverlayProvider>
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
    backgroundColor: 'white',
    flex: 1,
  },

  loadingContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
});
