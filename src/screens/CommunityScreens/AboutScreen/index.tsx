import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Divider, Subheading, Title} from 'react-native-paper';

import ClockIcon from '@iconscout/react-native-unicons/icons/uil-clock-five';
import LockIcon from '@iconscout/react-native-unicons/icons/uil-padlock';
import UnLockIcon from '@iconscout/react-native-unicons/icons/uil-lock-open-alt';
import OwnerIcon from '@iconscout/react-native-unicons/icons/uil-user-square';

import styles from './styles';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyles}>
        <Title style={styles.cardTitle}>Group Details</Title>
        <Subheading style={styles.listTitle}>Created</Subheading>
        <View style={styles.listContainer}>
          <ClockIcon size="20" color="#000" />
          <Text style={styles.listContent}>August 2021</Text>
        </View>
        <Divider style={styles.divider} />
        <Subheading style={styles.listTitle}>Owner</Subheading>
        <View style={styles.listContainer}>
          <OwnerIcon size="20" color="#000" />
          <Text style={styles.listContent}>Nishant Jindal</Text>
        </View>
        <Divider style={styles.divider} />
        <Subheading style={styles.listTitle}>Privacy Status</Subheading>
        <View style={styles.listContainer}>
          <UnLockIcon size="20" color="#000" />
          <Text style={styles.listContent}>Public</Text>
        </View>
      </Card>
      <Card style={styles.cardStyles}>
        <Title style={styles.cardTitle}>Resources</Title>

        <Subheading style={styles.listTitle}>🔥 YouTube Channel</Subheading>

        <Text style={styles.listLinkContent}>
          https://www.youtube.com/channel/UCan6AI1ASU12XvVTom1WglQ
        </Text>

        <Divider style={styles.divider} />
        <Subheading style={styles.listTitle}>⭐ Unacademy Profile</Subheading>

        <Text style={styles.listLinkContent}>
          https://unacademy.com/@nishantjindal
        </Text>
      </Card>
    </SafeAreaView>
  );
}
