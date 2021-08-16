import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import commentListStyling from './commentListStyling';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewCommentInput = ({onAddComment}) => {
  const [text, setText] = React.useState('');
  const addComment = () => {
    const newcomment = {
      ownerName: 'Devansh Agarwal',
      ownerAvatar:
        'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
      content: text,
      date: '12s ',
      likersIds: [],
    };

    setText('');
    onAddComment(newcomment);
  };
  return (
    <KeyboardAvoidingView enabled>
      <View style={commentListStyling.textInputContainer}>
        <TextInput
          onChangeText={text => setText(text)}
          value={text}
          placeholderTextColor="#C3C5C8"
          style={commentListStyling.textInput}
          multiline={true}
          placeholder="Write a comment.."
        />
        <TouchableOpacity onPress={addComment}>
          <Icon
            style={commentListStyling.icon}
            name="send"
            size={30}
            color="#00AAFF"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewCommentInput;
