import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {HomeScreens} from '../screens/HomeScreens';
import {BottomTabs} from '../components/BottomTabs';
import {Theme} from '../constants/appTheme';
import {useNavigation} from '@react-navigation/native';

import DropDownIcon from '@iconscout/react-native-unicons/icons/uil-angle-down';
import SettingIcon from '@iconscout/react-native-unicons/icons/uil-setting';

const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    // @ts-ignore
    navigate('Profile');
  };

  const styles = StyleSheet.create({
    homeFeedScreenHeaderRight: {
      // paddingVertical: 5,
      alignItems: 'center',
      marginRight: 16,
      alignSelf: 'flex-end',
      flexDirection: 'row',
    },
    homeFeedScreenHeaderRightText: {
      fontFamily: 'Gilroy-Bold',
      color: '#007f5f',
      fontSize: 24,
      marginLeft: 6,
    },
    profileFeedScreenHeaderRight: {
      // paddingVertical: 5,
      alignItems: 'center',
      marginRight: 16,
      alignSelf: 'flex-end',
      flexDirection: 'row',
    },
    headerStyle: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 24,
    },
  });
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabs {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.background,
        },
        headerTransparent: false,
        headerTintColor: Theme.colors.text,
        headerTitleAlign: 'left',
        headerTitleStyle: styles.headerStyle,
      }}>
      <Tab.Screen
        component={HomeScreens.HomeFeedScreen}
        name="home"
        options={{
          title: 'Welcome 👋',
          headerRight: props => (
            <TouchableOpacity
              style={styles.homeFeedScreenHeaderRight}
              onPress={() => console.log('Goal Selection Dropdown Pressed')}>
              <DropDownIcon size="28" color="#081c15" />
              <Text style={styles.homeFeedScreenHeaderRightText}>IITJEE</Text>
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
        options={{
          title: 'Notifications',
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        component={HomeScreens.ProfileScreen}
        name={'you'}
        options={{
          title: 'Profile',
          headerTitleAlign: 'left',
          headerRight: props => (
            <TouchableOpacity
              style={styles.profileFeedScreenHeaderRight}
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
