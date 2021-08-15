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
  Scene,
  NavBar,
  NavBarTitle,
  Header,
} from './../../../components/CommunityFeed';

const initialWidth = Dimensions.get('window').width;
export type tabKeys = 'all' | 'tradable' | 'gainers' | 'losers';
export const tabs = [
  {key: 'all' as tabKeys, title: 'Feed'},
  {key: 'gainers' as tabKeys, title: 'About'},
  {key: 'losers' as tabKeys, title: 'Mods'},
];

export default function App() {
  const {scrollY, index, setIndex, getRefForKey, ...sceneProps} =
    useScrollManager(tabs);

  const renderScene = useCallback(
    ({route: tab}: {route: ComTabRoute}) => (
      <Scene
        isActive={tabs[index].key === tab.key}
        routeKey={tab.key}
        scrollY={scrollY}
        {...sceneProps}
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

      <SafeAreaView style={styles.screen}>
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
          renderScene={renderScene}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
