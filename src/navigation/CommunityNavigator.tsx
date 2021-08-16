import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CommunityScreens} from '../screens/CommunityScreens';
const Community = createStackNavigator();
const CommunityNavigator = () => {
  return (
    <Community.Navigator
      initialRouteName="CommunityFeedScreen"
      screenOptions={{headerShown: false}}>
      <Community.Screen
        options={{headerShown: false}}
        name="CommunityFeedScreen"
        component={CommunityScreens.CommunityFeedScreen}
      />
      <Community.Screen
        options={{headerShown: false}}
        name="EducatorProfileScreen"
        component={CommunityScreens.EducatorProfileScreen}
      />
    </Community.Navigator>
  );
};

export default CommunityNavigator;
