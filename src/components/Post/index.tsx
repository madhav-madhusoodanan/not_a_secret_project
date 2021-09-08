import React from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';

import {styles} from './styles';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
interface Post {
  allowed: Boolean;
  post: any;
}
export default function Post({allowed, post}: Post) {
  const {navigate} = useNavigation();
  const navigateToCommunity = () => {
    // @ts-ignore
    navigate('Community');
  };
  // callbacks
  const navigateToComments = (allowed: Boolean) => {
    if (allowed) {
      // @ts-ignore
      navigate('Post');
    }
  };

  return (
    <View style={styles.post}>
      <PostHeader
        styles={styles}
        post={post}
        navigateToCommunity={navigateToCommunity}
      />
      <PostContent
        styles={styles}
        post={post}
        />
      <PostFooter
        post={post}
        styles={styles}
        navigateToComments={() => navigateToComments(allowed)}
      />
    </View>
  );
}
