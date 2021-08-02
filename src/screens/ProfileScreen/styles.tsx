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
    paddingTop: height * 0.071,
    paddingHorizontal: width * 0.063,
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },
  profileImage: {
    width: width / 3.14,
    height: height / 6.45,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 5,
  },

  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderWidth: 3,
  },

  headContainer: {
    marginVertical: height / 40.3,
    alignItems: 'center',
  },

  text: {
    color: Theme.colors.text,
  },

  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 0,
  },

  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },

  infoContainer: {
    // alignSelf: "center",
    // alignItems: "center",
    marginTop: height / 23.0285,
  },

  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
});
