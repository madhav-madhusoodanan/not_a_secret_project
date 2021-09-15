import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { useDispatch } from 'react-redux'
import {styles} from './styles';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import { getCommunitiy } from '../../store/Actions/CommunityActions';
interface Post {
  allowed: Boolean;
  post: any;
}
export default function Post({allowed, post}: Post) {
  const {navigate} = useNavigation();
  const dispatch = useDispatch()
  const navigateToCommunity = async() => {
    await dispatch(getCommunitiy(post.community._id, navigate));
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
      <PostContent styles={styles} post={post} />
      <PostFooter
        post={post}
        styles={styles}
        navigateToComments={() => navigateToComments(allowed)}
      />
    </View>
  );
}
