import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 800,
    padding: 20,
    // backgroundColor: 'yellow',
  },

  containerAvoidingView: {
    flex: 1,
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  input: {
    flexDirection: 'row',
    // paddingHorizontal: 25,
    paddingBottom: 0,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: 'grey',
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
