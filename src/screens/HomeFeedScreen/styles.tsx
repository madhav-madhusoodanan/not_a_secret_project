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
    paddingTop: 25,
    flexDirection: 'column',
    backgroundColor: Theme.colors.background,
  },
  header: {
    marginBottom: 18,
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
    paddingHorizontal: 16,
  },
  communityScroll: {
    marginBottom: 20,
  },
  joinedCommunities: {
    backgroundColor: '#faa307',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
  post: {
    backgroundColor: '#f5f5f1',
    // marginBottom: 10,
    borderRadius: 10,
    paddingBottom: 15,
  },
  customListView: {
    padding: 15,
    width: screenWidth - 40,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  infoWrapper: {
    marginLeft: 8,
  },
  namesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  extraInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  imageContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  paragraph: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 170,
    borderRadius: 10,
  },
  postFooter: {
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
  },
  reactionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  reactionText: {
    fontSize: 14,
    marginLeft: 4,
    fontFamily: 'Inter-Medium',
  },
  shareIcon: {
    position: 'absolute',

    paddingVertical: 10,
    right: 0,
  },
});
