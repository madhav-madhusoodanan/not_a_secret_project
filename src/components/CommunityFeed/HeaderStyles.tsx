import {StyleSheet} from 'react-native';
import layout from '../../constants/appLayout';
import {Theme} from '../../constants/appTheme';

const {
  window: {height, width},
  isSmallDevice,
} = layout;
export const PHOTO_SIZE = 80;

export const headerStyles = StyleSheet.create({
  textContainer: {marginLeft: 24, justifyContent: 'center', flex: 1},
  name: {fontSize: 24, fontWeight: '700'},
  bio: {fontSize: 15, marginTop: 4},
  photo: {
    height: PHOTO_SIZE,
    width: PHOTO_SIZE,
    borderRadius: PHOTO_SIZE / 2,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 24,
  },
});
