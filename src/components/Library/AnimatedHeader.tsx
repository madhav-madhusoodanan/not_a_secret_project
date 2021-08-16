import React, {FunctionComponent} from 'react';
import {Animated, StyleSheet, ViewProps} from 'react-native';

import {ComTabViewOffset} from './AnimatedTabView';
import {Theme} from './Theme';

export interface ComAnimatedHeaderProps extends Omit<ViewProps, 'style'> {
  scrollY: Animated.AnimatedValue;
}

export const ComAnimatedHeader: FunctionComponent<ComAnimatedHeaderProps> = ({
  scrollY,
  children,
  ...otherProps
}) => {
  const translateY = scrollY.interpolate({
    inputRange: [ComTabViewOffset, ComTabViewOffset + Theme.sizing.header],
    outputRange: [0, -Theme.sizing.header],
    extrapolateLeft: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.header, {transform: [{translateY}]}]}
      {...otherProps}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    height: Theme.sizing.header,
    paddingHorizontal: Theme.spacing.gutter,
  },
});
