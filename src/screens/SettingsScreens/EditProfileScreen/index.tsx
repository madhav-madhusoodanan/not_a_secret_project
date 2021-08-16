import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black'}}>yo</Text>
    </SafeAreaView>
  );
}
