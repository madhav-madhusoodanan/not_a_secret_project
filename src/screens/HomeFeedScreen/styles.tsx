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
    paddingTop: height * 0.045,
    paddingHorizontal: width * 0.025,
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },

  flatlist: {
    backgroundColor: '#FAFAFA',
  },

  headline: {
    fontSize: width * 0.066,
    marginRight: width * 0.4975,
    marginBottom: height * 0.044,
    color: Theme.colors.text,
    // fontFamily: 'CircularStd-Bold',
  },
});
