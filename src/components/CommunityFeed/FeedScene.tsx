import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  RefreshControl,
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  FlatList,
} from 'react-native';
import {ComAnimatedTabView} from '../Library';
import Post from '../Post';
import CommunityAbout from './CommunityAbout';
import CommunityMods from './CommunityMods';
import CommunityFeed from './CommunityFeed';

type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;

const data = [1, 2, 3, 4, 5].map(i => ({
  title: `Title ${i}`,
  key: `key-${i}`,
}));

interface FeedSceneProps {
  isActive: boolean;
  routeKey: string;
  scrollY: Animated.Value;
  trackRef: (key: string, ref: FlatList<any>) => void;
  onMomentumScrollBegin: (e: ScrollEvent) => void;
  onMomentumScrollEnd: (e: ScrollEvent) => void;
  onScrollEndDrag: (e: ScrollEvent) => void;
}

export const FeedScene: FunctionComponent<FeedSceneProps> = props => {
  const {
    isActive,
    routeKey,
    scrollY,
    trackRef,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    onScrollEndDrag,
  } = props;
  const Mods = () => (
    <ComAnimatedTabView
      data={data}
      windowSize={3}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => null} />
      }
      renderItem={({item}) => (
        <View style={styles.container}>
          <View style={styles.inner}>
            <Text>{item.title}</Text>
          </View>
        </View>
      )}
      onRef={(ref: any) => {
        trackRef(routeKey, ref);
      }}
      scrollY={isActive ? scrollY : undefined}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
    />
  );
  const Feed = () => (
    <ComAnimatedTabView
      data={data}
      windowSize={3}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => null} />
      }
      renderItem={({item}) => (
        <View style={styles.container}>
          <View style={styles.inner}>
            <Post allowed />
          </View>
        </View>
      )}
      onRef={(ref: any) => {
        trackRef(routeKey, ref);
      }}
      scrollY={isActive ? scrollY : undefined}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
    />
  );
  return (
    <View style={styles.container}>
      {routeKey === 'feed' && (
        <CommunityFeed styles={styles} {...props} data={data} />
      )}
      {routeKey === 'about' && (
        <CommunityAbout styles={styles} {...props} data={data} />
      )}
      {routeKey === 'mods' && (
        <CommunityMods styles={styles} {...props} data={data} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    // paddingHorizontal: 16,
    paddingVertical: 5,
    // backgroundColor: 'gray',
  },
});
