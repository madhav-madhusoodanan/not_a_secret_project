import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ProfileScreens} from '../screens/ProfileScreens';
const Profile = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <Profile.Navigator
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
      <Profile.Screen
        options={{title: 'Settings'}}
        name="SettingsScreen"
        component={ProfileScreens.SettingsScreen}
      />
      <Profile.Screen
        options={{headerShown: false}}
        name="EditProfileScreen"
        component={ProfileScreens.EditProfileScreen}
      />
    </Profile.Navigator>
  );
};

export default ProfileNavigator;
