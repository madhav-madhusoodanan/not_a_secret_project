import React, {useEffect, useState} from 'react';
import {View, Text, RefreshControl, ScrollView} from 'react-native';
import {Button, Headline} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';

import {styles} from './styles';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeFeedScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
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
      <Picker
        selectedValue={selectedLanguage}
        dropdownIconColor={'red'}
        style={styles.dropdown}
        mode={'dropdown'}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="IITJEE" value="IITJEE" />
        <Picker.Item label="NEET" value="NEET" />
        <Picker.Item label="CAT" value="CAT" />
        <Picker.Item label="UPSC-CSE" value="UPSC-CSE" />
      </Picker>
    </SafeAreaView>
  );
}
