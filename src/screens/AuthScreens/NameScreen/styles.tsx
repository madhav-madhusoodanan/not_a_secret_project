import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    paddingTop: 14,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.background,
  },
  subTitle: {
    marginBottom: 20,
    color: '#f00',
    fontSize: 12,
    textAlign: 'left',
  },
  title: {
    marginTop: 40,
    lineHeight: 36,
    color: '#000',
    fontSize: 28,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 100,
  },
  input: {
    flexDirection: 'column',
    marginBottom: 15,
    width: 220,
    marginTop: 50,
    alignSelf: 'center',
  },
  inputStyle: {
    backgroundColor: '#fafafa',
    color: '#000',
    height: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default styles;
