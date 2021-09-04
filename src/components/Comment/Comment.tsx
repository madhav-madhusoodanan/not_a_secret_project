import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import commentStyling from './CommentStyling';
import Reply from './Reply';

const Comment = ({displayLike, commentData}) => {
  const [liked, setLiked] = useState(false);
  const {content, ownerName, ownerAvatar, replies, date} = commentData;
  useEffect(() => {
    setLiked(displayLike);
  }, []);

  const onPressReply = () => {};

  const onPressLike = () => {
    setLiked(!liked);
  };
  const renderReplies = replies => {
    return replies.map((reply, index) => (
      <View key={index}>
        {/* @ts-ignore */}
        <Reply reply={reply} />
      </View>
    ));
  };
  return (
    <View style={commentStyling.backgroundWhite}>
      <View style={commentStyling.mainWrapper}>
        <Image style={commentStyling.image} source={{uri: ownerAvatar}} />
        <View style={commentStyling.wrapper}>
          <View style={commentStyling.commentHeader}>
            <Text style={commentStyling.commentOwner}>{ownerName}</Text>
            <Text style={commentStyling.commentDate}>{date}</Text>
          </View>
          <Text style={commentStyling.content}>{content}</Text>
        </View>
      </View>
      <View style={commentStyling.commentFooter}>
        {liked ? (
          <TouchableOpacity onPress={onPressLike}>
            <View style={{paddingRight: 5, paddingLeft: 5}}>
              <Text style={commentStyling.footerElementLiked}>Like</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressLike}>
            <View style={{paddingRight: 5, paddingLeft: 5}}>
              <Text style={commentStyling.footerElement}>Like</Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={onPressReply}>
          <Text style={commentStyling.footerElement}>Reply</Text>
        </TouchableOpacity>
      </View>
      {replies ? renderReplies(replies) : null}
    </View>
  );
};

export default Comment