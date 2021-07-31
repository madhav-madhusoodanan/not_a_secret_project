import React from 'react';
import {View, Text, RefreshControl, ScrollView} from 'react-native';
import {Button, Headline} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeFeedScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['#00AAFF']}
            progressBackgroundColor={'#f8f9fa'}
            onRefresh={onRefresh}
          />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView> */}

      <Headline style={styles.headline}>Welcome 👋</Headline>
    </SafeAreaView>
  );
}
