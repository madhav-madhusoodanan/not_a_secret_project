import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Animated,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

import {Headline, Subheading} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownIcon from '@iconscout/react-native-unicons/icons/uil-angle-down';
import Post from './../../components/Post';

import StickyItemFlatList from '@gorhom/sticky-item';

import {styles} from './styles';

// dummy data
const data = [...Array(10)].fill(0).map((_, index) => ({id: `item-${index}`}));

// configs
const ITEM_WIDTH = 100;
const ITEM_HEIGHT = 120;
const STICKY_ITEM_WIDTH = 40;
const STICKY_ITEM_HEIGHT = 46;
const STICKY_ITEM_BACKGROUNDS = ['#660708', '#370617'];
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

export default function HomeFeedScreen({navigator}) {
  // Menu

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // methods
  const handleStickyItemPress = () => Alert.alert('Sticky Item Pressed');

  // render
  const renderItem = ({item, index}) => (
    <View key={`item-${index}`} style={styles.joinedCommunities} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Headline style={styles.headline}>Welcome 👋</Headline>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => console.log('Goal Selection Dropdown Pressed')}>
          <Text style={[styles.pickerButtonActiveText]}>IITJEE</Text>

          <DropDownIcon
            style={[styles.pickerButtonMenuIcon]}
            size="28"
            color="#081c15"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.listContainter}>
        <View style={styles.communityScroll}>
          <Subheading style={styles.subheading}>My Communities</Subheading>
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
        </View>
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}
