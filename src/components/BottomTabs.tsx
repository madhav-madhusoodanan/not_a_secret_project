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
    borderTopWidth: 0.5,
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
          icon: <SVGIcon height={26} type="home-tab" width={26} />,
          iconActive: <SVGIcon height={26} type="home-tab-active" width={26} />,
          title: 'Home',
        };
      case 'explore':
        return {
          icon: <SVGIcon height={26} type="search-tab" width={26} />,
          iconActive: (
            <SVGIcon height={26} type="search-tab-active" width={26} />
          ),
          title: 'Explore',
        };
      case 'createPost':
        return {
          icon: <SVGIcon height={26} type="post-tab" width={26} />,
          iconActive: <SVGIcon height={26} type="post-tab-active" width={26} />,
          title: 'Post',
        };
      // case 'notifications':
      //   return {
      //     icon: <SVGIcon height={26} type="dm-tab" width={26} />,
      //     iconActive: <SVGIcon height={26} type="dm-tab-active" width={26} />,
      //     title: 'Pings',
      //   };
      case 'notifications':
        return {
          icon: <SVGIcon height={26} type="notifications-tab" width={26} />,
          iconActive: (
            <SVGIcon height={26} type="notifications-tab-active" width={26} />
          ),
          title: 'Pings',
        };
      case 'you':
        return {
          icon: <SVGIcon height={26} type="you-tab" width={26} />,
          iconActive: <SVGIcon height={26} type="you-tab-active" width={26} />,
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
          backgroundColor: colors.backgroundTertiary,
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
            {isFocused ? tab.iconActive : tab.icon}
            {/* <SCText style={styles.tabTitle}>{tab.title}</SCText> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
