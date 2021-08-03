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
import CommentIcon from '@iconscout/react-native-unicons/icons/uil-comment';
import ShareIcon from '@iconscout/react-native-unicons/icons/uil-share-alt';
import HeartIcon from '@iconscout/react-native-unicons/icons/uil-heart';
import {Button, Headline, Subheading, Menu} from 'react-native-paper';
import Lightbox from 'react-native-lightbox-v2';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVGIcon} from './../../components/SVGIcon';
import {SafeAreaLayout} from './../../components/ScreenContainer';
// import {ScaledImage} from './../../components/ScaledImage';
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
          <SVGIcon
            style={[styles.pickerButtonMenuIcon]}
            height={25}
            type="drop-down"
            width={25}
          />
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false} style={styles.listContainter}>
        <View style={styles.communityScroll}>
          <Subheading style={styles.subheading}>Your Communities</Subheading>
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
        <View style={styles.post}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.customListView}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
                }}></Image>
              <View style={styles.infoWrapper}>
                <View style={styles.namesWrapper}>
                  <TouchableOpacity
                    onPress={() => console.log('User Avatar Pressed')}>
                    <Text style={{fontSize: 14, fontWeight: '500'}}>
                      Nishant's Advanced Math 2021
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.extraInfoWrapper}>
                  <Text style={{color: 'gray', fontSize: 14, marginRight: 5}}>
                    5h
                  </Text>

                  <SVGIcon height={4} type="dot" width={4} />

                  <Text style={{fontSize: 12, marginLeft: 5, color: 'gray'}}>
                    Posted by @daviz00
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('User Avatar Pressed')}
              style={{width: 25, alignItems: 'center'}}>
              <SVGIcon height={18} type="kebab" width={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.paragraph}>
              The packages given in my coaching are really comprehensive. They
              are usually completed along with the chapter as the teachers give
              regular homework from them. It may not be a national level
              institute but believe me, I have seen Allen's and FIITJEE's
              material and ours have a mixture of questions from all of them.
              What should I do? #doubt #dcpandey
            </Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Image Button Pressed')}>
            <View style={styles.imageContainer}>
              {/* <ScaledImage height={300} source={item.image}></ScaledImage> */}
              {/* <Lightbox style={{flex: 1}}> */}
              <FastImage
                style={styles.postImage}
                source={{
                  uri: 'https://i.ibb.co/wpwTg4z/book.png',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
              {/* </Lightbox> */}
            </View>
          </TouchableOpacity>
          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.reactionIcon}>
              <HeartIcon size="25" color="#e8304a" />
              <Text style={{...styles.reactionText, color: '#e8304a'}}>12</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reactionIcon}
              onPress={() => console.log('Comment Button Pressed')}>
              <CommentIcon size="20" color="#001d3d" />
              <Text style={{...styles.reactionText, color: '#001d3d'}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('Share Button Pressed')}
              style={styles.shareIcon}>
              <ShareIcon size="20" color="#081c15" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View
          style={{
            borderBottomColor: 'black',
            width: '100%',
            paddingHorizontal: 16,
            borderBottomWidth: 2,
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
