import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
// import ImageModal from 'react-native-image-modal';
import TextInline from './TextInline';

const postContent =
  "The packages given in my coaching are really comprehensive. They are usually completed along with the chapter as the teachers give regular homework from them. It may not be a national level institute but believe me, I have seen Allen's and FIITJEE's material and ours have a mixture of questions from all of them. What should I do? #doubt #dcpandey";

const PostContent = ({styles, navigateToComments}) => {
  return (
    <>
      <View style={styles.contentContainer}>
        <TextInline text={postContent} targetLines={2} />
      </View>
      <TouchableOpacity onPress={navigateToComments}>
        <View style={styles.imageContainer}>
          {/* <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#000000"
            style={styles.postImage}
            source={{
              uri: 'https://i.ibb.co/wpwTg4z/book.png',
            }}
          /> */}
          <FastImage
            style={styles.postImage}
            source={{
              uri: 'https://i.ibb.co/wpwTg4z/book.png',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          {/* </Lightbox> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PostContent;
