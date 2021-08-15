import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    paddingTop: 14,
    paddingHorizontal: 16,
  },
  screen: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});

export default styles;
