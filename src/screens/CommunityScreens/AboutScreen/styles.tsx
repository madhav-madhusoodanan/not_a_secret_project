import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.background,
  },
  cardStyles: {
    borderRadius: 12,
    backgroundColor: '#F8F8F9',
    elevation: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  cardTitle: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  listTitle: {color: '#828282', fontSize: 14, fontFamily: 'Inter-Medium'},
});

export default styles;
