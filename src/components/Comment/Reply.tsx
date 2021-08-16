import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import commentStyling from './CommentStyling';

const Reply = ({ reply }) => {
  const onPress = () => {console.log({ presses: 'pressed' })}
    return (
      <View>
        <View style={commentStyling.mainWrapper}>
          <Image
            style={commentStyling.replyImage}
            source={{uri: reply.ownerAvatar}}
          />
          <View style={commentStyling.wrapper}>
            <View style={commentStyling.commentHeader}>
              <Text style={commentStyling.commentOwner}>{reply.ownerName}</Text>
              <Text style={commentStyling.commentDate}>{reply.date}</Text>
            </View>
            <Text style={commentStyling.content}>{reply.content}</Text>
          </View>
        </View>
        <View style={commentStyling.replyFooter}>
          <TouchableHighlight onPress={onPress}>
            <Text style={commentStyling.footerElement}>Like</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={onPress}>
            <Text style={commentStyling.footerElement}>Reply</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
export default Reply