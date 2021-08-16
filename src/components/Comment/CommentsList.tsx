import React, {Component, useRef, useState} from 'react';
import {
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Comment from './Comment';
import commentListStyling from './commentListStyling';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CommentsList = ({
  data,
  onAddComment,
  currentUser,
  topMargin,
}) => {
  const [text, setText] = React.useState('');
  const flatList = useRef<FlatList>(null);
  const addComment = () => {
    const newcomment = {
      ownerName: currentUser.name,
      ownerAvatar: currentUser.avatar,
      content: text,
      date: '13h ',
      likersIds: [],
    };
    const randomNumber = `${
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + 10
    }`;

    data.push({
      id: randomNumber,
      ...newcomment,
    });

    // this.refs.TextInput.clear();

    onAddComment(newcomment);
  };

  const displayLikeCondition = commentId => {
    let comment = data.filter(comment => comment.id === commentId);
    //check if liker id equals to current user id
    let founded = comment[0].likersIds.filter(
      likerId => likerId === currentUser.id,
    );

    if (founded.length) return true;
    else return false;
  };

  return (
    <View style={commentListStyling.mainContainer}>
      <FlatList
        style={{marginTop: topMargin}}
        ref={flatList}
        onContentSizeChange={() =>
          null !== flatList.current ? flatList.current.scrollToEnd() : null
        }
        extraData={{data, onAddComment, currentUser, topMargin}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={info => (
          <Comment
            commentData={info.item}
            displayLike={displayLikeCondition(info.item.id)}
          />
        )}
      />
    </View>
  );
};

export default CommentsList;
/* export default class CommentsList extends Component {
  state = {text: ''};

  addComment = () => {
    var {data, onAddComment, currentUser} = this.props;
    const {text} = this.state;
    const newcomment = {
      ownerName: currentUser.name,
      ownerAvatar: currentUser.avatar,
      content: text,
      date: '13h ',
      likersIds: [],
    };
    const randomNumber = `${
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + 10
    }`;

    data.push({
      id: randomNumber,
      ...newcomment,
    });
    this.setState({
      data,
    });

    this.refs.TextInput.clear();

    onAddComment(newcomment);
  };

  displayLikeCondition = commentId => {
    const {data, currentUser} = this.props;
    let comment = data.filter(comment => comment.id === commentId);
    //check if liker id equals to current user id
    let founded = comment[0].likersIds.filter(
      likerId => likerId === currentUser.id,
    );

    if (founded.length) return true;
    else return false;
  };
  render() {
    const {data, topMargin} = this.props;

    return (
      <View style={commentListStyling.mainContainer}>
        <FlatList
          style={{marginTop: topMargin}}
          ref="flatList"
          onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
          extraData={this.props}
          data={data}
          keyExtractor={item => item.id}
          renderItem={info => (
            <Comment
              commentData={info.item}
              displayLike={this.displayLikeCondition(info.item.id)}
            />
          )}
        />
      </View>
    );
  }
}

CommentsList.propTypes = {
  commentData: propTypes.shape({
    ownerName: propTypes.string.isRequired,
    ownerAvatar: propTypes.string,
    content: propTypes.string.isRequired,
    date: propTypes.string,
    liked: propTypes.bool,
    replies: propTypes.arrayOf(
      propTypes.shape({
        ownerName: propTypes.string,
        ownerAvatar: propTypes.string,
        content: propTypes.string.isRequired,
        date: propTypes.string,
      }),
    ),
  }),
  onAddComment: propTypes.func,
  currentUser: propTypes.object.isRequired,
}; */
