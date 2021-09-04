import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CommentIcon from '@iconscout/react-native-unicons/icons/uil-comment';
import ShareIcon from '@iconscout/react-native-unicons/icons/uil-share-alt';
import UpVoteIcon from '@iconscout/react-native-unicons/icons/uil-arrow-circle-up';
import DownVoteIcon from '@iconscout/react-native-unicons/icons/uil-arrow-circle-down';
interface Post {
  styles: any;
  navigateToComments: any;
  post?: any;
}
const PostFooter = ({styles, navigateToComments, post}: Post) => {
  const inlineStyle = {
    ...styles.reactionText,
    color: '#001d3d',
    // paddingRight: 10,
    // paddingVertical: 2,
  };
  
  return (
    <View style={styles.postFooter}>
      <View style={styles.voteContainer}>
        <TouchableOpacity style={styles.upVoteIcon}>
          <UpVoteIcon size="25" color="#00AAFF" />
          <Text style={{...styles.reactionText, color: '#00AAFF'}}>12</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downVoteIcon}>
          <DownVoteIcon size="25" color="#848c8e" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.commentIcon} onPress={navigateToComments}>
        <CommentIcon size="20" color="#001d3d" />
        <Text style={inlineStyle}>646</Text>
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
