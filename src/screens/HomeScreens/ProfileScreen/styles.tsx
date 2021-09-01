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
    flexDirection: 'column',
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.background,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 70,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    backgroundColor: Theme.colors.text,
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
    margin: 8,
  },

  subText: {
    fontSize: 10,
    color: '#4A5568',
    textTransform: 'uppercase',
    fontFamily: 'Inter-Regular',
  },

  bioText: {
    fontFamily: 'Inter-Medium',
    borderRadius: 20,
    fontSize: 14,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
    color: Theme.colors.text,
    lineHeight: 21,
    textAlign: 'center',
    paddingVertical: 10,
    marginHorizontal: 6,
  },

  infoContainer: {
    marginVertical: 10,
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
