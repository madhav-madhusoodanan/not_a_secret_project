import {StyleSheet} from 'react-native';
import layout from '../../../constants/appLayout';
import {Theme} from '../../../constants/appTheme';
import {Dimensions} from 'react-native';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  headline: {
    fontSize: 24,
    marginLeft: 10,
    marginBottom: 10,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.background,
    flex: 1,
  },
  customListView: {
    width: screenWidth - 40,
    flexDirection: 'row',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  infoWrapper: {
    marginLeft: 12,
  },
  namesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  extraInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    elevation: 0,
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },
  containerStyle: {
    backgroundColor: Theme.colors.background,
    padding: 10,
    // width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButtonStyles: {
    borderRadius: 10,
    borderColor: Theme.colors.primary,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  postButtonLabelStyles: {
    color: Theme.colors.background,
    textTransform: 'none',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },

  postButtonContentStyles: {
    height: 44,
    width: 159,
  },
  editor: {
    fontSize: 18,
    textAlignVertical: 'top',
    flex: 1,
    fontFamily: 'Lato-Regular',
    color: 'black',
    marginTop: 10,
    marginBottom: 72,
  },
});
