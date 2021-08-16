import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SettingsScreens} from '../screens/SettingsScreens';
const Settings = createStackNavigator();
const SettingsNavigator = () => {
  return (
    <Settings.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{headerShown: false}}>
      <Settings.Screen
        options={{headerShown: false}}
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
