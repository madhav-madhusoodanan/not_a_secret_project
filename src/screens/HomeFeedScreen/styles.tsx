import {StyleSheet} from 'react-native';
import layout from '../../constants/appLayout';
import {Theme} from '../../constants/appTheme';
import {Dimensions} from 'react-native';

const {
  window: {height, width},
  isSmallDevice,
} = layout;

const BORDER_RADIUS = 10;
const ITEM_WIDTH = 100;
const ITEM_HEIGHT = 120;

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    flexDirection: 'column',
    backgroundColor: Theme.colors.background,
  },
  header: {
    // marginBottom: 18,
    // backgroundColor: 'red',
    paddingHorizontal: 16,
  },
  headline: {
    fontSize: 28,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Gilroy-Bold',
  },
  pickerButton: {
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  pickerButtonActiveText: {
    fontFamily: 'Gilroy-Bold',
    color: '#007f5f',
    fontSize: 24,
    marginRight: 10,
  },
  pickerButtonMenuIcon: {
    color: 'black',
  },
  subheading: {
    fontSize: 18,
    color: Theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 12,
    marginTop: 15,
    paddingHorizontal: 16,
  },
  communityScroll: {
    marginBottom: 10,
  },
  joinedCommunities: {
    backgroundColor: '#faa307',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
  listContainter: {
    //
  },
});
