import React from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';

import {styles} from './styles';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
interface Post {
  allowed: Boolean;
}
export default function Post({ allowed }: Post) {
  const {navigate} = useNavigation();
  const navigateToCommunity = () => {
    // @ts-ignore
    navigate('Community');
  };
  // callbacks
  const navigateToComments = (allowed: Boolean) => {
    // bottomSheetModalRef.current?.present();
    if(allowed){
      // @ts-ignore
      navigate('Post');
    }
    console.log('reached');
  };

  return (
    <View style={styles.post}>
      <PostHeader styles={styles} navigateToCommunity={navigateToCommunity} />
      <PostContent styles={styles} navigateToComments={() => navigateToComments(allowed)} />
      <PostFooter
        styles={styles}
        navigateToComments={navigateToComments}
      />
    </View>
  );
}
