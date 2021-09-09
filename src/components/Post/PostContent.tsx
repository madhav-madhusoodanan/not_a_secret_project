import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import TextInline from './TextInline';
import Lightbox from 'react-native-lightbox-v2';

const postContent =
  "The packages given in my coaching are really comprehensive. They are usually completed along with the chapter as the teachers give regular homework from them. It may not be a national level institute but believe me, I have seen Allen's and FIITJEE's material and ours have a mixture of questions from all of them. What should I do? #doubt #dcpandey";

const PostContent = ({styles, post}) => {
  return (
    <>
      <View style={styles.contentContainer}>
        <TextInline text={post.description} targetLines={3} />
      </View>
      {post.image && (
        <Lightbox>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.postImage}
              source={{
                uri: post.image.uri,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </Lightbox>
      )}
    </>
  );
};

export default PostContent;
