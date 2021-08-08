import {StyleSheet, Dimensions} from 'react-native';
import {blue100} from 'react-native-paper/lib/typescript/styles/colors';
import layout from '../../constants/appLayout';
import {Theme} from '../../constants/appTheme';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingBottom: 10,
    backgroundColor: '#F8F8F9',
  },
  header: {
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 16,
    paddingBottom: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
    borderBottomLeftRadius: 20,
  },
  searchbar: {
    marginTop: 20,
    backgroundColor: '#F8F8F9',
    color: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    paddingTop: 10,
    flex: 1,
  },
});
