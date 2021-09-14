import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    marginBottom: 2,
    marginTop: 8,
    borderRadius: 0,
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
    backgroundColor: 'pink',
  },
  paragraph: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  postImage: {
    // width: '100%',
    width: 360,
    height: 180,
    borderRadius: 10,
  },
  postFooter: {
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
  },
  voteContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  upVoteIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downVoteIcon: {
    marginLeft: 12,
  },
  commentIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginLeft: 16,
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
  },
});
