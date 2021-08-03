import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import CommentIcon from './../../assets/icons/post/comment.png';
import ShareIcon from './../../assets/icons/post/share.png';
import {SafeAreaLayout} from './../../components/ScreenContainer';
import {
  FlatFeed,
  Activity,
  StatusUpdateForm,
  LikeButton,
  ReactionIcon,
} from 'react-native-activity-feed';

import {styles} from './styles';

export default function HomeFeedScreen() {
  const renderActivity = props => (
    <Activity
      {...props}
      Footer={
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <LikeButton {...props} />
          <ReactionIcon
            icon={CommentIcon}
            height={18}
            width={18}
            counts={props.activity.reaction_counts}
            kind="comment"
          />
          <ReactionIcon icon={ShareIcon} height={18} width={18} kind="share" />
        </View>
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Headline style={styles.headline}>Welcome 👋</Headline>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => console.log('Goal Selection Dropdown Pressed')}>
          <Text style={[styles.pickerButtonActiveText]}>IIT-JEE</Text>
          <SVGIcon
            style={[styles.pickerButtonMenuIcon]}
            height={25}
            type="drop-down"
            width={25}
          />
        </TouchableOpacity>
      </View> */}

      <FlatFeed Activity={renderActivity} style={styles.feedPost} notify />

      <StatusUpdateForm feedGroup={'timeline'} />
    </SafeAreaView>
  );
}
