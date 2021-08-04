import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, Headline, Searchbar} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';

import {styles} from './styles';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search for Creators"
        onChangeText={onChangeSearch}
        style={styles.searchbar}
        value={searchQuery}
      />
    </SafeAreaView>
  );
}
