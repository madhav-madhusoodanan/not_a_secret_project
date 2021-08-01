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
    // alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },

  headline: {
    fontSize: 28,
    // marginRight: width * 0.4975,
    // marginBottom: height * 0.044,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
  },

  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    paddingHorizontal: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  pickerButton: {
    // paddingHorizontal: width * 0.0407,
    paddingVertical: height * 0.01,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    // width: 150,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 2,
  },

  pickerButtonActiveText: {
    fontFamily: 'Gilroy-Bold',
    color: '#C62828',
    fontSize: 24,
    marginRight: 10,
  },

  pickerButtonMenuIcon: {},
});
