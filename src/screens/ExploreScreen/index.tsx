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
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';

import {styles} from './styles';

const screenWidth = Math.round(Dimensions.get('window').width);

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search for Creators"
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
        <AppleCard
          smallTitle="Nishant Jindal"
          largeTitle="Math  Booster 2021"
          footnoteText="200 Members"
          footnoteTextStyle={{
            color: 'black',
            fontFamily: 'Lato-Bold',
            fontSize: 12,
          }}
          style={styles.communityCard}
          resizeMode="cover"
          source={{uri: 'https://picsum.photos/id/237/400/400'}}
          backgroundStyle={{
            height: 200,
            width: screenWidth - 32,
          }}
          onPress={() => console.log('Community Cover Pressed')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
