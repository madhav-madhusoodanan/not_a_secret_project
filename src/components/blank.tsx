import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import layout from '../constants/appLayout';
import {Theme} from '../constants/appTheme';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

const Layout = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: Theme.colors.background,
  },
});
