import React from 'react';
import {
  createStackNavigator
} from '@react-navigation/stack';
import CrossIcon from '@iconscout/react-native-unicons/icons/uil-times';
import CommentScreenContent from '../components/Comment';
import CreatePostScreen from '../screens/HomeScreens/CreatePostScreen'
const PostStack = createStackNavigator();

const PostNavigator = () => {
  return (
    <PostStack.Navigator
      initialRouteName="CommentsScreen"
      screenOptions={{
        headerTransparent: true,
        presentation: 'modal',
        headerBackImage: () => <CrossIcon size="28" color="#000" />,
        headerStyle: {
          // backgroundColor: Theme.colors.background,
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Gilroy-Bold',
          fontSize: 20,
        },
      }}>
      <PostStack.Screen
        name="CommentsScreen"
        options={{
          title: 'Comments',
        }}
        component={CommentScreenContent}
      />
      <PostStack.Screen name='CreatePostScreen' options={{ headerShown: false }} component={CreatePostScreen} />
    </PostStack.Navigator>
  );
};

export default PostNavigator;
