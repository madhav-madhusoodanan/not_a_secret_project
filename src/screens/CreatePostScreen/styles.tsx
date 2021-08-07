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
    backgroundColor: Theme.colors.background,
  },
  headline: {
    fontSize: 24,
    marginLeft: 10,
    marginVertical: 10,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: 'pink',
    flex: 1,
    // alignItems: 'center',
  },
});
