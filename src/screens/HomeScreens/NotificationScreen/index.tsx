import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

import {styles} from './styles';
import SkeletonView from '../../../components/Post/SkeletonView';

export default function NotificationScreen() {
  return (
    // <SkeletonView  />

    <SafeAreaView style={styles.container}>
      <View style={styles.announcementContainer}>
        <Text style={styles.heroText}>Hold Tight!</Text>
        <Text style={styles.supportingText}>
          Notifications are Coming Soon :)
        </Text>
      </View>

      <LottieView
        source={require('../../../assets/lottie/parachute.json')}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}
