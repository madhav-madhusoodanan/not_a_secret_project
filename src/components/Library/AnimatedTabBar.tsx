import React, {FunctionComponent, ReactNode} from 'react';
import {Animated, StyleSheet, ViewProps, View} from 'react-native';

import {ComTabViewOffset} from './AnimatedTabView';
import {Theme} from './Theme';

export interface ComAnimatedTabBarProps extends Omit<ViewProps, 'style'> {
  scrollY: Animated.AnimatedValue;
  children: ReactNode;
}

export const ComAnimatedTabBar: FunctionComponent<ComAnimatedTabBarProps> = ({
  children,
  scrollY,
  ...otherProps
}) => {
  const translateY = scrollY.interpolate({
    inputRange: [ComTabViewOffset, ComTabViewOffset + Theme.sizing.header],
    outputRange: [Theme.sizing.header, 0],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [
      ComTabViewOffset + Theme.sizing.header,
      ComTabViewOffset + Theme.sizing.header + 20,
    ],
    outputRange: [0, 1],
    extrapolateRight: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.tabBar, {transform: [{translateY}]}]}
      {...otherProps}>
      {children}
      <Animated.View style={{opacity}}>
        <View style={styles.border} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    zIndex: 10,
    backgroundColor: '#fff',
  },
  border: {
    height: 1,
    backgroundColor: '#eee',
  },
});
