import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AngleLeftIcon from '@iconscout/react-native-unicons/icons/uil-angle-left-b';
import CrossIcon from '@iconscout/react-native-unicons/icons/uil-times';
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
        options={{
          title: 'Settings',
          headerBackImage: () => <AngleLeftIcon size="30" color="#000" />,
        }}
        name="SettingsScreen"
        component={ProfileScreens.SettingsScreen}
      />
      <Profile.Screen
        options={{
          title: 'Edit Profile',
          headerBackImage: () => <CrossIcon size="30" color="#000" />,
        }}
        name="EditProfileScreen"
        component={ProfileScreens.EditProfileScreen}
      />
    </Profile.Navigator>
  );
};

export default ProfileNavigator;
