import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import FeedIcon from '@iconscout/react-native-unicons/icons/uil-th';
import AboutIcon from '@iconscout/react-native-unicons/icons/uil-file-info-alt';

import React from 'react';
import {CommunityScreens} from '../screens/CommunityScreens';
const Community = createMaterialTopTabNavigator();
const CommunityNavigator = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
      }}>
      <View>
        <Text style={{textAlign: 'center'}}>Top Text on Tabs</Text>
      </View>
      {/* <CommunityHeader/> */}
      <Community.Navigator
        screenOptions={{
          tabBarBounces: true,
          tabBarIconStyle: {top: 2},
          tabBarLabelStyle: {fontSize: 14, fontFamily: 'Inter-Bold'},
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarItemStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            borderBottomWidth: 3,
          },
        }}
        initialRouteName="FeedScreen">
        <Community.Screen
          options={{
            title: 'Feed',
            lazy: true,

            tabBarIcon: () => <FeedIcon size="20" color="#000" />,
          }}
          name="FeedScreen"
          component={CommunityScreens.FeedScreen}
        />
        <Community.Screen
          options={{
            title: 'About',
            tabBarIcon: () => <AboutIcon size="20" color="#000" />,
          }}
          name="AboutScreen"
          component={CommunityScreens.AboutScreen}
        />
      </Community.Navigator>
    </View>
  );
};

export default CommunityNavigator;
