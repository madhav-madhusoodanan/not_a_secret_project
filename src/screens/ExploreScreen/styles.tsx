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
    backgroundColor: '#F8F8F9',
  },
  header: {
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    paddingBottom: 20,
    borderBottomRightRadius: 20,
    elevation: 1,
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
    flex: 1,
    marginTop: 120,
  },
});
