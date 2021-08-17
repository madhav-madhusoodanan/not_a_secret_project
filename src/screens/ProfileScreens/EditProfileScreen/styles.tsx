import {StyleSheet, Platform} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.background,
  },
  textInputContainer: {
    backgroundColor: Theme.colors.error,
    color: 'black',
  },
  bioText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.text,
    lineHeight: 20,
    textAlign: 'left',
  },
});

export default styles;
