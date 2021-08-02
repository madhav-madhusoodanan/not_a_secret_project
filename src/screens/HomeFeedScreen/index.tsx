import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import {
  FlatFeed,
  Activity,
  StatusUpdateForm,
  LikeButton,
} from 'react-native-activity-feed';

import {styles} from './styles';

export default function HomeFeedScreen() {
  const renderActivity = props => (
    <Activity {...props} Footer={<LikeButton {...props} />} />
  );

  return (
    <SafeAreaView style={styles.container}>
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
      <FlatFeed Activity={renderActivity} notify />
      <StatusUpdateForm feedGroup={'timeline'} />
    </SafeAreaView>
  );
}
