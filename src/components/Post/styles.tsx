import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  post: {
    backgroundColor: '#eff7f6',
    marginBottom: 10,
    borderRadius: 20,
    // elevation: 1,
    paddingBottom: 6,
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
  voteContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  upVoteIcon: {
    // paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f13a59',
  },
  downVoteIcon: {
    marginLeft: 8,
    // paddingRight: 5,
    // backgroundColor: '#f13a59',
  },
  commentIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginLeft: 10,
    // backgroundColor: '#f13a59',
  },
  reactionText: {
    fontSize: 13,
    marginLeft: 4,
    fontFamily: 'Inter-Medium',
  },
  shareIcon: {
    paddingVertical: 6,
    marginLeft: 6,
    paddingHorizontal: 10,
    // backgroundColor: '#f13a59',
    // right: 0,
  },
});
