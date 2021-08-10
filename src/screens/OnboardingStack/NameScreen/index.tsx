import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {Text, Subheading, Headline} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import NavButton from '../../../components/Buttons/NavigationButton';
import styles from './styles';

export default function NameScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Enter your Full Name
      </Headline>
      <Subheading numberOfLines={2} style={styles.subTitle}>
        Please use your Real Name
      </Subheading>
    </SafeAreaView>
  );
}
