import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React, {FC, memo, useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  FlatListProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  Text,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Header from './../components/CommunityFeed/Header';
import TabBar from './../components/CommunityFeed/TabBar';
import useScrollSync from '../hooks/useScrollSync';
import ConnectionList from './../components/CommunityFeed/ConnectionList';
import {Connection} from '../types/Connection';
import {ScrollPair} from '../types/ScrollPair';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FRIENDS, SUGGESTIONS} from '../mocks/connections';
import {HeaderConfig} from '../types/HeaderConfig';
import {Visibility} from '../types/Visibility';
import HeaderOverlay from './../components/CommunityFeed/HeaderOverlay';

import {CommunityScreens} from '../screens/CommunityScreens';
import FeedIcon from '@iconscout/react-native-unicons/icons/uil-th';
import AboutIcon from '@iconscout/react-native-unicons/icons/uil-file-info-alt';

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = 48;

const OVERLAY_VISIBILITY_OFFSET = 32;

const Community = createMaterialTopTabNavigator();

const CommunityNavigator: FC = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {height: screenHeight} = useWindowDimensions();

  const friendsRef = useRef<FlatList>(null);
  const suggestionsRef = useRef<FlatList>(null);

  const [tabIndex, setTabIndex] = useState(0);

  const [headerHeight, setHeaderHeight] = useState(0);

  const defaultHeaderHeight = top + HEADER_HEIGHT;

  const headerConfig = useMemo<HeaderConfig>(
    () => ({
      heightCollapsed: defaultHeaderHeight,
      heightExpanded: headerHeight,
    }),
    [defaultHeaderHeight, headerHeight],
  );

  const {heightCollapsed, heightExpanded} = headerConfig;

  const headerDiff = heightExpanded - heightCollapsed;

  const rendered = headerHeight > 0;

  const handleHeaderLayout = useCallback<NonNullable<ViewProps['onLayout']>>(
    event => setHeaderHeight(event.nativeEvent.layout.height),
    [],
  );

  const friendsScrollValue = useSharedValue(0);

  const friendsScrollHandler = useAnimatedScrollHandler(
    event => (friendsScrollValue.value = event.contentOffset.y),
  );

  const suggestionsScrollValue = useSharedValue(0);

  const suggestionsScrollHandler = useAnimatedScrollHandler(
    event => (suggestionsScrollValue.value = event.contentOffset.y),
  );

  const scrollPairs = useMemo<ScrollPair[]>(
    () => [
      {list: friendsRef, position: friendsScrollValue},
      {list: suggestionsRef, position: suggestionsScrollValue},
    ],
    [friendsRef, friendsScrollValue, suggestionsRef, suggestionsScrollValue],
  );

  const {sync} = useScrollSync(scrollPairs, headerConfig);

  const сurrentScrollValue = useDerivedValue(
    () =>
      tabIndex === 0 ? friendsScrollValue.value : suggestionsScrollValue.value,
    [tabIndex, friendsScrollValue, suggestionsScrollValue],
  );

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerDiff),
  );

  const tabBarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    opacity: interpolate(
      translateY.value,
      [-headerDiff, 0],
      [Visibility.Hidden, Visibility.Visible],
    ),
  }));

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingTop: rendered ? headerHeight + TAB_BAR_HEIGHT : 0,
      paddingBottom: bottom,
      minHeight: screenHeight + headerDiff,
    }),
    [rendered, headerHeight, bottom, screenHeight, headerDiff],
  );

  const sharedProps = useMemo<Partial<FlatListProps<Connection>>>(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      showsVerticalScrollIndicator: false,
      onScrollEndDrag: sync,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: {top: heightExpanded},
    }),
    [contentContainerStyle, sync, heightExpanded],
  );

  const renderFriends = useCallback(
    () => (
      <ConnectionList
        ref={friendsRef}
        data={FRIENDS}
        onScroll={friendsScrollHandler}
        {...sharedProps}
      />
    ),
    [friendsRef, friendsScrollHandler, sharedProps],
  );

  const renderSuggestions = useCallback(
    () => (
      <ConnectionList
        ref={suggestionsRef}
        data={SUGGESTIONS}
        onScroll={suggestionsScrollHandler}
        {...sharedProps}
      />
    ),
    [suggestionsRef, suggestionsScrollHandler, sharedProps],
  );

  const tabBarStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? styles.tabBarContainer : undefined,
      {top: rendered ? headerHeight : undefined},
      tabBarAnimatedStyle,
    ],
    [rendered, headerHeight, tabBarAnimatedStyle],
  );

  const renderTabBar = useCallback<
    (props: MaterialTopTabBarProps) => React.ReactElement
  >(
    props => (
      <Animated.View style={tabBarStyle}>
        <TabBar onIndexChange={setTabIndex} {...props} />
      </Animated.View>
    ),
    [tabBarStyle],
  );

  const headerContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? styles.headerContainer : undefined,
      {paddingTop: top},
      headerAnimatedStyle,
    ],

    [rendered, top, headerAnimatedStyle],
  );

  const collapsedOverlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [-headerDiff, OVERLAY_VISIBILITY_OFFSET - headerDiff, 0],
      [Visibility.Visible, Visibility.Hidden, Visibility.Hidden],
    ),
  }));

  const collapsedOverlayStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      styles.collapsedOvarlay,
      collapsedOverlayAnimatedStyle,
      {height: heightCollapsed, paddingTop: top},
    ],
    [collapsedOverlayAnimatedStyle, heightCollapsed, top],
  );

  return (
    <View style={styles.container}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        <Header />
      </Animated.View>
      <Animated.View style={collapsedOverlayStyle}>
        <HeaderOverlay />
      </Animated.View>
      <Community.Navigator
        screenOptions={{
          tabBarBounces: true,
          tabBarIconStyle: {top: 2},
          tabBarLabelStyle: {fontSize: 14, fontFamily: 'Inter-Bold'},
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarItemStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            borderBottomWidth: 3,
          },
        }}
        initialRouteName="FeedScreen"
        tabBar={renderTabBar}>
        <Community.Screen
          options={{
            title: 'Feed',
            lazy: true,

            tabBarIcon: () => <FeedIcon size="20" color="#000" />,
          }}
          name="FeedScreen">
          {renderSuggestions}
        </Community.Screen>
        <Community.Screen
          options={{
            title: 'About',
            tabBarIcon: () => <AboutIcon size="20" color="#000" />,
          }}
          name="AboutScreen">
          {renderFriends}
        </Community.Screen>
      </Community.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
  overlayName: {
    fontSize: 24,
  },
  collapsedOvarlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    zIndex: 2,
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
});

export default memo(CommunityNavigator);
