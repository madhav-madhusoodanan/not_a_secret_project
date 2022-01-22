import React, {Component, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import Comment from './Comment';
import commentListStyling from './commentListStyling';
import MoreOptions from './MoreOptions';
const CommentsList = ({data, onAddComment, currentUser, topMargin}) => {
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

    onAddComment(newcomment);
  };

  const deleteFunc = commentId => {
    data = data.filter(comment => comment.id === commentId);
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
