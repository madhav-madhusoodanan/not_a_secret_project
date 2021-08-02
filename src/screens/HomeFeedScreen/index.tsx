import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import {
  StreamApp,
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
      <StreamApp
        apiKey="tba2bau9mq3h"
        appId="1136512"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicG9saXNoZWQtc2NlbmUtOCJ9.HXWXURrKbLXryaHejlJ6Rtrxx6M9euqda3K4VeWlMBI">
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

        <Button
          mode="contained"
          onPress={() => console.log('Dummy Button Pressed')}
          style={{
            width: '50%',
            marginVertical: 20,
          }}>
          Hello
        </Button>

        <FlatFeed Activity={renderActivity} notify />
        <StatusUpdateForm feedGroup={'timeline'} />
      </StreamApp>
    </SafeAreaView>
  );
}
