import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {Theme} from '../../constants/appTheme';
import layout, { calc } from '../../constants/appLayout';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

interface Props {
  onPress: any;
  text: any;
  sending?: any;
}

const NavButton = ({onPress, text, sending}: Props) => {
  return (
    <Button
      mode="contained"
      contentStyle={styles.navButtonContentStyles}
      disabled={sending}
      loading={sending}
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
    marginTop: calc('height',30),
    marginHorizontal: calc('width',34),
    // marginBottom: 20,
  },

  navButtonLabelStyles: {
    color: Theme.colors.background,
    textTransform: 'none',
    fontFamily: 'Inter-SemiBold',
    fontSize: calc('height',18),
  },

  navButtonContentStyles: {
    height: calc('height',60),
    minWidth: '75%',
    justifyContent: 'center',
  },
});
