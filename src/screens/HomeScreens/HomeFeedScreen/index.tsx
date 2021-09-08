import React, {useEffect} from 'react';
import {View, Alert, Animated, ScrollView} from 'react-native';
import {Subheading, FAB, ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StickyItemFlatList from '@gorhom/sticky-item';
import {useSelector} from 'react-redux';
import Post from '../../../components/Post';
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

const StickyItemView = stickyProps => {
  const amazingAnimation = {
    // here you add your custom interactive animation
    // based on the animated value `x`
  };

  return <Animated.View style={amazingAnimation} />;
};

export default function HomeFeedScreen({}) {
  const {navigate} = useNavigation();
  const post = useSelector((state: any) => state.Post);
  // methods
  const handleStickyItemPress = () => Alert.alert('Sticky Item Pressed');

  // render
  const renderItem = ({item, index}) => (
    <View key={`item-${index}`} style={styles.joinedCommunities} />
  );

  useEffect(() => {
  }, [post.posts]);

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
        {post.posts ? (
          post.posts.map((p, i) => {
            return <Post post={p} allowed key={i} />;
          })
        ) : (
          <ActivityIndicator animating color="#000" />
        )}
      </ScrollView>
      <FAB
        style={styles.fab}
        label={'Post'}
        icon="plus"
        color={'white'}
        // @ts-ignore
        onPress={() => navigate('Post', {screen: 'CreatePostScreen'})}
      />
    </SafeAreaView>
  );
}
