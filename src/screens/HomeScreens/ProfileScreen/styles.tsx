import {StyleSheet} from 'react-native';
import layout from '../../../constants/appLayout';
import {Theme} from '../../../constants/appTheme';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    flexDirection: 'column',
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.background,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 22,
    marginTop: 10,
  },

  headContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },

  text: {
    color: Theme.colors.text,
    fontFamily: 'Inter-SemiBold',
  },

  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 60,
    // backgroundColor: 'red',
    margin: 8,
  },

  subText: {
    fontSize: 10,
    color: '#4A5568',
    textTransform: 'uppercase',
    fontFamily: 'Inter-Regular',
  },

  bioText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.text,
    lineHeight: 20,
    textAlign: 'left',
  },

  infoContainer: {
    marginVertical: 10,
    // alignItems: 'flex-start',
  },

  statsBox: {
    alignItems: 'center',
    flex: 1,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  editButtonStyles: {
    borderRadius: 10,
    marginRight: 4,
    borderColor: Theme.colors.primary,
    borderWidth: 2,
  },

  editButtonLabelStyles: {
    color: Theme.colors.primary,
    textTransform: 'none',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },

  editButtonContentStyles: {
    height: 42,
    width: '100%',
  },
});
