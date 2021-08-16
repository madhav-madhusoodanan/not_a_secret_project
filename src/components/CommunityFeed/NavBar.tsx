import React, {FunctionComponent, ReactNode} from 'react';
import {Animated, StyleSheet, View, ViewStyle, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const NAV_HEADER_HEIGHT = 82;
export const NAV_TITLE_HEIGHT = 56;

export const NavBar: FunctionComponent = ({children}) => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop}]}>
      <Animated.View style={[styles.titleContainer]}>{children}</Animated.View>
    </View>
  );
};

export const NavBarTitle = () => (
  <Text style={styles.title}>JEE Mentoship 2021</Text>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    zIndex: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: NAV_TITLE_HEIGHT,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    // backgroundColor: 'lavender',
    fontWeight: 'bold',
  },
});
