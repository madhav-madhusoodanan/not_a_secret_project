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
  post: {
    backgroundColor: '#f5f5f1',
    // marginBottom: 10,
    borderRadius: 10,
    paddingBottom: 10,
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
    marginTop: 5,
  },
  reactionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    paddingVertical: 5,
  },
  reactionText: {
    fontSize: 14,
    marginLeft: 4,
    fontFamily: 'Inter-Medium',
  },
  shareIcon: {
    position: 'absolute',
    paddingLeft: 20,
    paddingVertical: 10,
    right: 0,
  },
});
