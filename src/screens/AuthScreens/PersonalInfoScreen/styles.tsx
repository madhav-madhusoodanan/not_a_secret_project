import {StyleSheet, Platform, Dimensions} from 'react-native';
import {Theme} from '../../../constants/appTheme';
const {width, height} = Dimensions.get('screen');
const _width = width * 0.9;
const _height = _width * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: 800,
    paddingTop: 14,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.background,
  },
  title: {
    marginTop: 50,
    lineHeight: 36,
    color: '#000',
    fontSize: 28,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 120,
  },
  card: {
    width: _width,
    height: _height,
    overflow: 'hidden',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
  },
});

export default styles;
