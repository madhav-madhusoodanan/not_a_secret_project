import React, {useCallback} from 'react';
import {Dimensions, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import styles from './styles';

import {
  ComAnimatedNavBar,
  ComAnimatedHeader,
  ComAnimatedTabBar,
  ComTabRoute,
  ComTabView,
  ComTabBar,
} from './../../../components/Library';
import {useScrollManager} from './../../../hooks';
import {
  FeedScene,
  NavBar,
  NavBarTitle,
  Header,
} from './../../../components/CommunityFeed';

const initialWidth = Dimensions.get('window').width;
export type tabKeys = 'feed' | 'about' | 'mods' | 'rules';
export const tabs = [
  {key: 'feed' as tabKeys, title: 'Feed'},
  {key: 'about' as tabKeys, title: 'About'},
  {key: 'mods' as tabKeys, title: 'Mods'},
];

export default function App() {
  const {scrollY, index, setIndex, getRefForKey, ...FeedSceneProps} =
    useScrollManager(tabs);

  const renderFeedScene = useCallback(
    ({route: tab}: {route: ComTabRoute}) => (
      <FeedScene
        isActive={tabs[index].key === tab.key}
        routeKey={tab.key}
        scrollY={scrollY}
        {...FeedSceneProps}
      />
    ),
    [getRefForKey, index, tabs, scrollY],
  );

  return (
    <SafeAreaProvider>
      <NavBar>
        <ComAnimatedNavBar scrollY={scrollY}>
          <NavBarTitle />
        </ComAnimatedNavBar>
      </NavBar>

      <View style={styles.screen}>
        <ComAnimatedHeader scrollY={scrollY}>
          <Header />
        </ComAnimatedHeader>

        <ComTabView
          index={index}
          setIndex={setIndex}
          width={initialWidth}
          routes={tabs}
          renderTabBar={p => (
            <ComAnimatedTabBar scrollY={scrollY}>
              <ComTabBar {...p} />
            </ComAnimatedTabBar>
          )}
          renderScene={renderFeedScene}
        />
      </View>
    </SafeAreaProvider>
  );
}
