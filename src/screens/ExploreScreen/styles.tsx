import {StyleSheet} from 'react-native';
import layout from '../../constants/appLayout';
import {Theme} from '../../constants/appTheme';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    paddingHorizontal: 16,
    // backgroundColor: Theme.colors.background,
    backgroundColor: '#F8F8F9',
  },
  searchbar: {
    marginTop: 20,
    // marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
