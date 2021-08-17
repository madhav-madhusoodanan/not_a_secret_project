import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Theme.colors.background,
  },

  listContainter: {
    //
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#00AAFF',
  },
  divider: {
    backgroundColor: 'gray',
  },
});

export default styles;
