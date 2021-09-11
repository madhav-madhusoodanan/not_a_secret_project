import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import AngleLeftIcon from '@iconscout/react-native-unicons/icons/uil-angle-left-b';
import CrossIcon from '@iconscout/react-native-unicons/icons/uil-times';
import {ProfileScreens} from '../screens/ProfileScreens';
import { HomeScreens } from '../screens/HomeScreens';
const Profile = createStackNavigator();
const ProfileNavigator = () => {
  const styles = StyleSheet.create({
    saveButton: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
    },
  });
  return (
    <Profile.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerTransparent: false,
        // presentation: 'modal',
        headerStyle: {
          // backgroundColor: Theme.colors.background,
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Gilroy-Bold',
          fontSize: 22,
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
      <Profile.Screen
        options={{
          title: 'Educator Profile',
          headerBackImage: () => <AngleLeftIcon size="30" color="#000" />,
        }}
        name="EducatorProfileScreen"
        component={ProfileScreens.EducatorProfileScreen}
      />
      <Profile.Screen
        options={{
          title: '',
          headerBackImage: () => <AngleLeftIcon size="30" color="#000" />,
        }}
        name="PeerProfileScreen"
        component={ProfileScreens.PeerProfileScreen}
      />
    </Profile.Navigator>
  );
};

export default ProfileNavigator;
/* 
          headerRight: props => (
            <Button
              color={'#00AAFF'}
              uppercase={false}
              labelStyle={styles.saveButton}>
              Save
            </Button>
          ),
*/
