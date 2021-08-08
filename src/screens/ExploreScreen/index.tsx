import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Button, Headline, Searchbar} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';

import {styles} from './styles';
import CommunityCard from './../../components/CommunityCard';

const screenWidth = Math.round(Dimensions.get('window').width);

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Explore Creators"
          onChangeText={onChangeSearch}
          placeholderTextColor="gray"
          style={styles.searchbar}
          value={searchQuery}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.viewContainer}>
        <CommunityCard />
      </ScrollView>
    </SafeAreaView>
  );
}
