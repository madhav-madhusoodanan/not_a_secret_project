import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';
import {calc} from '../../constants/appLayout';

import {styles} from './styles';

const screenWidth = Math.round(Dimensions.get('window').width);

export default function CommunityCard({ community }) {
  return (
    <AppleCard
      smallTitle={`${community.createdBy.firstName} ${community.createdBy.lastName}`}
      largeTitle={`${community.name}`}
      footnoteText={`${community.members.length} Members`}
      footnoteTextStyle={styles.footnoteTextStyle}
      style={styles.container}
      resizeMode="cover"
      source={{uri: community.coverImage.uri}}
      backgroundStyle={styles.background}
      onPress={() => console.log('Community Cover Pressed')}
    />
  );
}
