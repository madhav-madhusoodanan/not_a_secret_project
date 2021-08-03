import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import {SafeAreaLayout} from './../../components/ScreenContainer';

import {styles} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function HomeFeedScreen() {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Headline style={styles.headline}>Welcome 👋</Headline>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => console.log('Goal Selection Dropdown Pressed')}>
          <Text style={[styles.pickerButtonActiveText]}>IITJEE</Text>
          <SVGIcon
            style={[styles.pickerButtonMenuIcon]}
            height={25}
            type="drop-down"
            width={25}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
