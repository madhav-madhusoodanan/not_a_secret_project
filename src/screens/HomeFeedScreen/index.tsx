import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, Alert, Animated, ScrollView, FlatList} from 'react-native';

import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {Divider, Subheading, FAB} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownIcon from '@iconscout/react-native-unicons/icons/uil-angle-down';
import Post from './../../components/Post';

import StickyItemFlatList from '@gorhom/sticky-item';

import {styles} from './styles';

import {CreatePostBottomSheetContent} from './..';

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

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        {/* <Divider style={styles.divider} /> */}
        <Post />
        <Post />
        <Post />
      </ScrollView>
      <FAB
        style={styles.fab}
        label={'Post'}
        icon="plus"
        color={'white'}
        onPress={handlePresentModalPress}
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        stackBehavior={'push'}
        index={1}
        name={'Create Post'}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <CreatePostBottomSheetContent />
      </BottomSheetModal>
    </SafeAreaView>
  );
}
