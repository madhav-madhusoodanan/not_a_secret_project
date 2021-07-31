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
    paddingTop: 20,
    paddingHorizontal: 20,
    // alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },

  flatlist: {
    backgroundColor: '#FAFAFA',
  },

  headline: {
    fontSize: width * 0.066,
    // marginRight: width * 0.4975,
    // marginBottom: height * 0.044,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
  },

  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dropdown: {
    width: 130,
  },
});
