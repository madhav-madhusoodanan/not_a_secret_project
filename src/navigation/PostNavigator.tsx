import React, {useEffect} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  StackCardInterpolationProps,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';
import {Easing} from 'react-native';
import {Text} from 'react-native-paper';
import CommentScreenContent from '../components/Comment';

const PostStack = createStackNavigator();

const PostNavigator = () => {
  return (
    <PostStack.Navigator initialRouteName="PostScreen">
      <PostStack.Screen
        name="PostScreen"
        options={{
          headerShown: false,
          gestureDirection: 'vertical',
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
          cardStyleInterpolator: ({
            current,
            layouts,
          }: StackCardInterpolationProps) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
        component={CommentScreenContent}
      />
    </PostStack.Navigator>
  );
};

export default PostNavigator;
