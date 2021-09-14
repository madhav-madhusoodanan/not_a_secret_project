import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import TextInline from './TextInline';
import Lightbox from 'react-native-lightbox-v2';
import ImageModal from 'react-native-image-modal';

const PostContent = ({styles, post}) => {
  return (
    <>
      <View style={styles.contentContainer}>
        <TextInline text={post.description} targetLines={3} />
      </View>
      {post.image && (
        // <Lightbox>
        //   <View style={styles.imageContainer}>
        //     <FastImage
        //       style={styles.postImage}
        //       source={{
        //         uri: post.image.uri,
        //         priority: FastImage.priority.normal,
        //       }}
        //       resizeMode={FastImage.resizeMode.cover}
        //     />
        //   </View>
        // </Lightbox>
        <View style={styles.imageContainer}>
          <ImageModal
            resizeMode="cover"
            renderToHardwareTextureAndroid={false}
            modalImageResizeMode="contain"
            imageBackgroundColor="#f8f9fa"
            style={styles.postImage}
            source={{
              uri: post.image.uri,
            }}
          />
        </View>
      )}
    </>
  );
};

export default PostContent;
