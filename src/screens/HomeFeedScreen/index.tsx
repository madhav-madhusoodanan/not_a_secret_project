import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Animated,
  FlatList,
} from 'react-native';
import {Button, Headline, Menu} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import {SafeAreaLayout} from './../../components/ScreenContainer';
import StickyItemFlatList from '@gorhom/sticky-item';

import {styles} from './styles';

// dummy data
const data = [...Array(20)].fill(0).map((_, index) => ({id: `item-${index}`}));

// configs
const ITEM_WIDTH = 100;
const ITEM_HEIGHT = 100;
const STICKY_ITEM_WIDTH = 24;
const STICKY_ITEM_HEIGHT = 24;
const STICKY_ITEM_BACKGROUNDS = ['#222', '#000'];
const SEPARATOR_SIZE = 16;
const BORDER_RADIUS = 10;

const StickyItemView = ({
  x,
  threshold,
  itemWidth,
  itemHeight,
  stickyItemWidth,
  stickyItemHeight,
  separatorSize,
  isRTL,
}) => {
  const amazingAnimation = {
    // here you add your custom interactive animation
    // based on the animated value `x`
  };

  return <Animated.View style={amazingAnimation} />;
};

export default function HomeFeedScreen() {
  // methods
  const handleStickyItemPress = () => Alert.alert('Sticky Item Pressed');

  // render
  const renderItem = ({item, index}) => (
    <View
      key={`item-${index}`}
      style={{
        backgroundColor: 'pink',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: BORDER_RADIUS,
      }}
    />
  );

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
      <StickyItemFlatList
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        separatorSize={SEPARATOR_SIZE}
        borderRadius={BORDER_RADIUS}
        stickyItemWidth={STICKY_ITEM_WIDTH}
        stickyItemHeight={STICKY_ITEM_HEIGHT}
        stickyItemBackgroundColors={STICKY_ITEM_BACKGROUNDS}
        stickyItemContent={StickyItemView}
        onStickyItemPress={handleStickyItemPress}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
