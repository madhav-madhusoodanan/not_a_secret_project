import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CommunityScreens} from '../screens/CommunityScreens';
const Auth = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Auth.Navigator
      initialRouteName="CommunityFeedScreen"
      screenOptions={{headerShown: false}}>
      <Auth.Screen
        options={{headerShown: false}}
        name="CommunityFeedScreen"
        component={CommunityScreens.CommunityFeedScreen}
      />
      <Auth.Screen
        options={{headerShown: false}}
        name="EducatorProfileScreen"
        component={CommunityScreens.EducatorProfileScreen}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
