import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    // paddingHorizontal: 20,
    backgroundColor: Theme.colors.background,
  },
  listGroup: {
    marginHorizontal: 10,
    marginTop: 20,
    // alignSelf: 'center',
    flexDirection: 'column',
  },
  listItem: {
    backgroundColor: '#f5f3f4',
    borderRadius: 12,
    marginVertical: 10,
    height: 60,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
