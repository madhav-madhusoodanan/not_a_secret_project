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
    paddingHorizontal: 15,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: Theme.colors.background,
    backgroundColor: '#F8F8F9',
  },
  announcementContainer: {
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    marginBottom: 30,
    color: '#00AAFF',
  },
  supportingText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#333533',
  },
});
