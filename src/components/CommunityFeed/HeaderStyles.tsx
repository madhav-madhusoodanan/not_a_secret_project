import {StyleSheet} from 'react-native';
import layout from '../../constants/appLayout';
import {Theme} from '../../constants/appTheme';

const {
  window: {height, width},
  isSmallDevice,
} = layout;
export const PHOTO_SIZE = 120;

export const headerStyles = StyleSheet.create({
  infoContainer: {
    marginLeft: 24,
    // bottom: 4,
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    fontSize: 20,
    // fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  stats: {
    fontSize: 15,
    marginTop: 6,
    fontFamily: 'Inter-Bold',
  },
  statsacomp: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 6,
    color: '#4A5568',
    fontFamily: 'Inter-Medium',
  },
  photo: {
    height: PHOTO_SIZE,
    width: PHOTO_SIZE,
    borderRadius: PHOTO_SIZE / 2,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
  },
  followButtonStyles: {
    borderRadius: 10,
    marginRight: 4,
    borderColor: Theme.colors.primary,
    borderWidth: 2,
  },

  followButtonLabelStyles: {
    color: Theme.colors.background,
    textTransform: 'none',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },

  followButtonContentStyles: {
    height: 42,
    width: 120,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: 12,
  },
});
