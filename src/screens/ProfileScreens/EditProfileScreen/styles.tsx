import {StyleSheet, Platform} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {Theme} from '../../../constants/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    // paddingHorizontal: 20,
    backgroundColor: Theme.colors.background,
  },
  textInputContainer: {
    // backgroundColor: Theme.colors.error,
    color: 'black',
    height: 50,
    right: 3,
    textAlign: 'left',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginBottom: 10,
  },
  bioText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.text,
    lineHeight: 20,
    textAlign: 'left',
  },
  viewOne: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  viewTwo: {
    marginVertical: 30,
    width: 100,
  },
  touchableOpacityOne: {
    position: 'absolute',
    zIndex: 1,
    bottom: -15,
    right: -15,
  },
  listIconOne: {
    borderRadius: 15,
    height: 30,
    width: 30,
    backgroundColor: '#bbb',
  },
  imageOne: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 'auto',
  },
  content: {
    marginVertical: 5,
  },
  subHeading: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
  },
  editor: {
    fontSize: 14,
    textAlignVertical: 'top',
    right: 3,
    fontFamily: 'Inter-Medium',
    color: 'black',
    marginTop: 10,
    paddingBottom: 18,
  },
  scrollStyle: {
    paddingHorizontal: 20,
  },
});

export default styles;
