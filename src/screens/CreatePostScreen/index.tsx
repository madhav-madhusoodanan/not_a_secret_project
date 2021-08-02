import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import {SafeAreaLayout} from './../../components/ScreenContainer';

import {styles} from './styles';

export default function CreatePostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hey</Text>
    </SafeAreaView>
  );
}