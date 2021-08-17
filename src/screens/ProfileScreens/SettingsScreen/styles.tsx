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
    marginVertical: 5,
    height: 60,
    paddingTop: 15,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: 'black',
    fontSize: 16,
    top: -4,
    fontFamily: 'Inter-Bold',
  },
});

export default styles;
