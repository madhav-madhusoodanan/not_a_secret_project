import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Button,
  Colors,
  Card,
  List,
  Subheading,
  Title,
} from 'react-native-paper';

import styles from './styles';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyles}>
        <Title style={styles.cardTitle}>Group Details</Title>
        <Subheading style={styles.listTitle}>Created</Subheading>
        <List.Item
          title="13 October, 2021 by Aman Dhattarwal"
          titleStyle={{color: '#000'}}
          style={{
            height: 50,
            justifyContent: 'center',
            // marginBottom: 10,
          }}
          left={() => (
            <List.Icon icon="clock-time-four-outline" color={Colors.black} />
          )}
        />
        <Subheading style={styles.listTitle}>Privacy Level</Subheading>
        <List.Item
          title="Private"
          titleStyle={{color: '#000'}}
          style={{
            height: 50,
            justifyContent: 'center',
            // marginBottom: 10,
          }}
          left={() => <List.Icon icon="lock-outline" color={Colors.black} />}
        />
      </Card>
    </SafeAreaView>
  );
}
