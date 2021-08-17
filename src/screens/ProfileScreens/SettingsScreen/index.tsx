import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SVGIcon} from './../../../components/SVGIcon';
import styles from './styles';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listGroup}>
        <RNBounceable bounceEffect={0.97} onPress={() => {}}>
          <List.Item
            title="Privacy Policy"
            style={styles.listItem}
            right={() => <List.Icon color="#000" icon="chevron-right" />}
            left={() => (
              <List.Icon
                color="#45E5A2"
                icon={props => (
                  <SVGIcon {...props} height={50} type="privacy" width={50} />
                )}
              />
            )}
          />
        </RNBounceable>

        <RNBounceable bounceEffect={0.97} onPress={() => {}}>
          <List.Item
            title="Report Bug"
            style={styles.listItem}
            right={() => <List.Icon color="#000" icon="chevron-right" />}
            left={() => <List.Icon color="#71A1FF" icon="bug" />}
          />
        </RNBounceable>
        <RNBounceable bounceEffect={0.97} onPress={() => {}}>
          <List.Item
            title="Logout"
            style={styles.listItem}
            right={() => <List.Icon color="#000" icon="chevron-right" />}
            left={() => <List.Icon color="#FF5E5E" icon="folder" />}
          />
        </RNBounceable>
      </View>
    </SafeAreaView>
  );
}
