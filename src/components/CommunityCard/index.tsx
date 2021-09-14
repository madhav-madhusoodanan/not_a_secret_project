import React, {useEffect, useState} from 'react';
import {AppleCard} from 'react-native-apple-card-views';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {getCommunitiy} from '../../store/Actions/CommunityActions';

export default function CommunityCard({community}) {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const navigateToCommunity = async () => {
    await dispatch(getCommunitiy(community._id, navigate));
    // @ts-ignore
    navigate('Community')
  };
  return (
    <>
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
        onPress={navigateToCommunity}
      />
    </>
  );
}
