import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import commentStyling from './CommentStyling';

import Reply from './Reply';

export default class Comment extends Component {
  state = {
    liked: false,
  };

  componentWillMount = () => {
    const {displayLike} = this.props;
    this.setState({
      liked: displayLike,
    });
  };

  onPressReply = () => {};

  onPressLike = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  renderReplies = replies => {
    return replies.map((reply, index) => (
      <View key={index}>
        <Reply reply={reply} />
      </View>
    ));
  };

  render() {
    const {commentData} = this.props;
    const {content, ownerName, ownerAvatar, replies, date} = commentData;
    const {liked} = this.state;

    return (
      <View style={{backgroundColor: 'white'}}>
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
            <TouchableOpacity onPress={this.onPressLike}>
              <View style={{paddingRight: 5, paddingLeft: 5}}>
                <Text style={commentStyling.footerElementLiked}>Like</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.onPressLike}>
              <View style={{paddingRight: 5, paddingLeft: 5}}>
                <Text style={commentStyling.footerElement}>Like</Text>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={this.onPress}>
            <Text style={commentStyling.footerElement}>Reply</Text>
          </TouchableOpacity>
        </View>
        {replies ? this.renderReplies(replies) : null}
      </View>
    );
  }
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    ownerName: PropTypes.string.isRequired,
    ownerAvatar: PropTypes.string,
    content: PropTypes.string.isRequired,
    date: PropTypes.string,
    liked: PropTypes.bool,
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        ownerName: PropTypes.string,
        ownerAvatar: PropTypes.string,
        content: PropTypes.string.isRequired,
        date: PropTypes.string,
      }),
    ),
  }),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  displayLike: PropTypes.bool,
};