import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import LottieView from 'lottie-react-native';

import {styles} from './styles';

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.announcementContainer}>
        <Text style={styles.heroText}>Hold Tight!</Text>
        <Text style={styles.supportingText}>
          Notifications are Coming Soon :){' '}
        </Text>
      </View>

      <LottieView
        source={require('./../../assets/lottie/parachute.json')}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}
