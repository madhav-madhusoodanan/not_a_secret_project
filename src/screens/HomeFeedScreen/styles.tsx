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
    paddingTop: 25,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.background,
  },
  header: {
    // paddingHorizontal: 15,
  },
  headline: {
    fontSize: 28,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
  },
  pickerButton: {
    // paddingHorizontal: width * 0.0407,
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  pickerButtonActiveText: {
    fontFamily: 'Gilroy-Bold',
    color: '#007f5f',
    fontSize: 24,
    marginRight: 10,
  },
  pickerButtonMenuIcon: {
    color: 'black',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 32,
  },
});
