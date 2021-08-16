import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SettingsScreens} from '../screens/SettingsScreens';
const Settings = createStackNavigator();
const SettingsNavigator = () => {
  return (
    <Settings.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerTransparent: true,
        presentation: 'modal',
        headerStyle: {
          // backgroundColor: Theme.colors.background,
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Gilroy-Bold',
          fontSize: 24,
        },
      }}>
      <Settings.Screen
        options={{title: 'Settings'}}
        name="SettingsScreen"
        component={SettingsScreens.SettingsScreen}
      />
      <Settings.Screen
        options={{headerShown: false}}
        name="EditProfileScreen"
        component={SettingsScreens.EditProfileScreen}
      />
    </Settings.Navigator>
  );
};

export default SettingsNavigator;