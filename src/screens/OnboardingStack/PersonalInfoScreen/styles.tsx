import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
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
    marginBottom: 50,
  },
  genderText: {
    marginTop: 130,
    lineHeight: 36,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 100,
  },
  switch: {
    marginBottom: 250,
  },
});

export default styles;
