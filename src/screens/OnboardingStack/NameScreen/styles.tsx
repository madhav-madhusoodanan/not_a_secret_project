import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    paddingTop: 14,
    paddingHorizontal: 20,
    // alignItems: 'center',
  },

  title: {
    marginTop: 50,
    lineHeight: 36,
    color: '#000',
    fontSize: 28,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 100,
  },

  // subTitle: {
  //   marginTop: 20,
  //   color: '#000',
  //   fontSize: 10,
  //   textAlign: 'center',
  // },

  // input: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderBottomWidth: 1.5,
  //   borderBottomColor: '#DADADA',
  //   width: 235,
  //   marginTop: 50,
  //   alignSelf: 'center',
  //   paddingHorizontal: 25,
  //   marginBottom: 50,
  // },

  // inputStyle: {
  //   flex: 1,
  //   fontFamily: 'Inter-SemiBold',
  //   fontSize: 20,
  //   color: 'black',
  //   marginBottom: -2,
  //   marginLeft: 2,
  // },
});

export default styles;