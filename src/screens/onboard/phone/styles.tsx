import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 35,
    position: 'relative',
    letterSpacing: 0.5,
    color: 'black',
  },
  input: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingBottom: 0,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    width: 235,
    marginTop: 85,
  },

  inputStyle: {
    marginLeft: 5,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

export default styles;
