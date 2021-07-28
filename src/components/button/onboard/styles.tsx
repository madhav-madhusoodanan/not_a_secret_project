import {StyleSheet} from 'react-native';
import layout from '../../../constants/layout';
const {
  window: {height, width},
  isSmallDevice,
} = layout;
export const styles = StyleSheet.create({
  btnView: {
    // flex: 1,
    // justifyContent: "flex-end",
    alignSelf: 'stretch',
    paddingVertical: 46,
    // backgroundColor: 'red',
    paddingHorizontal: 22,
  },
  btn: {
    borderRadius: 50,
  },
  labelStyle: {
    fontSize: height * 0.022,
    paddingVertical: height * 0.0037,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    // fontWeight: "bold",
    textTransform: 'none',
    minHeight: height * 0.03,
    // fontFamily: 'ProductSans-Bold',
  },
});
