import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {HomeScreens} from '../screens/HomeScreens';
import {BottomTabs} from '../components/BottomTabs';
import {Theme} from '../constants/appTheme';
import {useNavigation} from '@react-navigation/core';

import DropDownIcon from '@iconscout/react-native-unicons/icons/uil-angle-down';
import SettingIcon from '@iconscout/react-native-unicons/icons/uil-setting';

const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('Setting');
  };

  return (
    <Tab.Navigator
      tabBar={props => <BottomTabs {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.background,
        },
        headerTransparent: true,
        headerTintColor: Theme.colors.text,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: 'Gilroy-Bold',
          fontSize: 24,
        },
      }}>
      <Tab.Screen
        component={HomeScreens.HomeFeedScreen}
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
        component={HomeScreens.ExploreScreen}
        name={'explore'}
        options={{
          title: 'Explore',
          headerShown: false,
        }}
      />

      <Tab.Screen
        component={HomeScreens.NotificationScreen}
        name={'notifications'}
        options={{title: 'Notifications'}}
      />
      <Tab.Screen
        component={HomeScreens.ProfileScreen}
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
              onPress={submitHandler}>
              <SettingIcon size="24" color="#081c15" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
