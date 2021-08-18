import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';
import {calc} from '../../constants/appLayout';

import {styles} from './styles';

const screenWidth = Math.round(Dimensions.get('window').width);

export default function CommunityCard() {
  return (
    <AppleCard
      smallTitle="Nishant Jindal"
      largeTitle="Math  Booster 2021"
      footnoteText="200 Members"
      footnoteTextStyle={styles.footnoteTextStyle}
      style={styles.container}
      resizeMode="cover"
      source={{uri: 'https://picsum.photos/id/237/400/400'}}
      backgroundStyle={styles.background}
      onPress={() => console.log('Community Cover Pressed')}
    />
  );
}
