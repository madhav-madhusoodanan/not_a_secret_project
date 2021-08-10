import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {Theme} from '../../constants/appTheme';
import layout from '../../constants/appLayout';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

const NavButton = ({onPress, text}) => {
  return (
    <Button
      mode="contained"
      contentStyle={styles.navButtonContentStyles}
      style={styles.navButtonStyles}
      labelStyle={styles.navButtonLabelStyles}
      color="#00AAFF"
      onPress={onPress}>
      {text}
    </Button>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  navButtonStyles: {
    borderRadius: 60,
    marginTop: 30,
    marginHorizontal: 34,
    // marginBottom: 20,
  },

  navButtonLabelStyles: {
    color: Theme.colors.background,
    textTransform: 'none',
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
  },

  navButtonContentStyles: {
    height: 60,
    minWidth: '75%',
    justifyContent: 'center',
  },
});
