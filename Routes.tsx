import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import CommunityNavigator from './src/navigation/CommunityNavigator';
import ProfileNavigator from './src/navigation/ProfileNavigator';
import Splash from './src/screens/Splash';
import PostNavigator from './src/navigation/PostNavigator';
import {useSelector} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';


const RootStack = createStackNavigator();

const Routes = () => {
  const {user} = useSelector((state: any) => state.Auth);
  return (
    <BottomSheetModalProvider>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        {/* change initial route to Splash on production */}
        {user ? (
            <>
              <RootStack.Screen component={HomeNavigator} name="Home" />
              <RootStack.Screen component={CommunityNavigator} name="Community" />
              <RootStack.Screen component={ProfileNavigator} name="Profile" />
              <RootStack.Screen component={PostNavigator} name="Post" />
            </>
          ) : (
            <>
              <RootStack.Screen component={Splash} name="Splash" />
              <RootStack.Screen component={AuthNavigator} name="Auth" />
            </>
          )}
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    );

}

export default Routes

const styles = StyleSheet.create({})
