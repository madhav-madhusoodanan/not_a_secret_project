import React from 'react';
import {Text, View, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import CommentIcon from '@iconscout/react-native-unicons/icons/uil-comment';
import ShareIcon from '@iconscout/react-native-unicons/icons/uil-share-alt';
import UpVoteIcon from '@iconscout/react-native-unicons/icons/uil-arrow-circle-up';
import DownVoteIcon from '@iconscout/react-native-unicons/icons/uil-arrow-circle-down';
import {useSelector, useDispatch} from 'react-redux';
import {upVotePost, downVotePost} from '../../store/Actions/PostActions';

interface Post {
  styles: any;
  navigateToComments: any;
  post?: any;
}
const PostFooter = ({styles, navigateToComments, post}: Post) => {
  const {user} = useSelector((state: any) => state.Auth);
  const dispatch = useDispatch();
  const inlineStyle = {
    ...styles.reactionText,
    color: '#001d3d',
  };

  const upvoteHandler = async () => {
    await dispatch(upVotePost(post._id))
  }

  return (
    <View style={styles.postFooter}>
      <View style={styles.voteContainer}>
        <TouchableOpacity
          style={styles.upVoteIcon}
          onPress={upvoteHandler}>
          <UpVoteIcon
            size="25"
            color={post.upvotes.includes(user._id) ? '#00AAFF' : '#000'}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.reactionText,
            color: post.voteCount < 0 ? '#f5222d' : '#00AAFF',
          }}>
          {post.voteCount}
        </Text>
        <TouchableOpacity
          style={styles.downVoteIcon}
          onPress={() => dispatch(downVotePost(post._id))}>
          <DownVoteIcon
            size="25"
            color={post.downvotes.includes(user._id) ? '#f5222d' : '#000'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.commentIcon} onPress={navigateToComments}>
        <CommentIcon size="20" color="#001d3d" />
        <Text style={inlineStyle}>{post.commentCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Share Button Pressed')}
        style={styles.shareIcon}>
        <ShareIcon size="20" color="#081c15" />
      </TouchableOpacity>
    </View>
  );
};

export default PostFooter;
