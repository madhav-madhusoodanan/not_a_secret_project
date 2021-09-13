import React, {useEffect, useState} from 'react';
import {AppleCard} from 'react-native-apple-card-views';
import { useNavigation } from '@react-navigation/native'

import {styles} from './styles';

export default function CommunityCard({ community }) {
  const { navigate } = useNavigation()
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
      // @ts-ignore
      onPress={() => navigate('Community')}
    />
  );
}
