import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useKeyboard} from '../hooks/useKeyboard';
import {SCText} from './SCText';
import {SVGIcon} from './SVGIcon';

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  tabListContainer: {
    // borderTopWidth: 0.5,
    elevation: 10,
    flexDirection: 'row',
  },
  tabTitle: {
    fontSize: 12,
  },
});

export const BottomTabs = ({navigation, state}) => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const {isOpen} = useKeyboard();
  const getTitle = key => {
    // eslint-disable-next-line default-case
    switch (key) {
      case 'home':
        return {
          // @ts-ignore
          icon: <SVGIcon height={24} type="home-tab" width={24} />,
          // @ts-ignore
          iconActive: <SVGIcon height={24} type="home-tab-active" width={24} />,
          title: 'Home',
        };
      case 'explore':
        return {
          // @ts-ignore
          icon: <SVGIcon height={24} type="search-tab" width={24} />,
          iconActive: (
            // @ts-ignore
            <SVGIcon height={24} type="search-tab-active" width={24} />
          ),
          title: 'Explore',
        };

      case 'notifications':
        return {
          // @ts-ignore
          icon: <SVGIcon height={24} type="notifications-tab" width={24} />,
          iconActive: (
            // @ts-ignore
            <SVGIcon height={24} type="notifications-tab-active" width={24} />
          ),
          title: 'Pings',
        };
      case 'you':
        return {
          // @ts-ignore
          icon: <SVGIcon height={24} type="you-tab" width={24} />,
          // @ts-ignore
          iconActive: <SVGIcon height={24} type="you-tab-active" width={24} />,
          title: 'You',
        };
    }
  };

  /**
   * TODO: For some reason bottom tabs show above the keyboard
   */
  if (Platform.OS === 'android' && isOpen) {
    return null;
  }

  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          borderTopColor: colors.border,
          paddingBottom: insets.bottom,
        },
        styles.tabListContainer,
      ]}>
      {state.routes.map((route, index) => {
        const tab = getTitle(route.name);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            target: route.key,
            type: 'tabPress',
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            onPress={onPress}
            style={styles.tabContainer}>
            {/* @ts-ignore */}
            {isFocused ? tab.iconActive : tab.icon}
            {/* <SCText style={styles.tabTitle}>{tab.title}</SCText> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
