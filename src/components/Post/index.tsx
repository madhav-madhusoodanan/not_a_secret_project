import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CommentIcon from '@iconscout/react-native-unicons/icons/uil-comment';
import ShareIcon from '@iconscout/react-native-unicons/icons/uil-share-alt';
import UpVoteIcon from '@iconscout/react-native-unicons/icons/uil-arrow-circle-up';
import DownVoteIcon from '@iconscout/react-native-unicons/icons/uil-arrow-circle-down';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {Menu} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {SVGIcon} from './../SVGIcon';
import TextInline from './TextInline';
// import Comment from '../Comment';

import {styles} from './styles';

const postContent =
  "The packages given in my coaching are really comprehensive. They are usually completed along with the chapter as the teachers give regular homework from them. It may not be a national level institute but believe me, I have seen Allen's and FIITJEE's material and ours have a mixture of questions from all of them. What should I do? #doubt #dcpandey";

export default function Post() {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.post}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.customListView}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
            }}></Image>
          <View style={styles.infoWrapper}>
            <View style={styles.namesWrapper}>
              <TouchableOpacity
                onPress={() => console.log('User Avatar Pressed')}>
                <Text style={{fontSize: 13, fontFamily: 'Inter-Medium'}}>
                  Nishant's Advanced Math 2021
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.extraInfoWrapper}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 12,
                  marginRight: 5,
                  fontFamily: 'Inter-Regular',
                }}>
                5h
              </Text>
              {/* @ts-ignore */}
              <SVGIcon height={4} type="dot" width={4} />

              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 5,
                  color: 'gray',
                  fontFamily: 'Inter-Regular',
                }}>
                Posted by @daviz00
              </Text>
            </View>
          </View>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity
              onPress={openMenu}
              style={{
                // width: 25,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                // backgroundColor: 'red',
                alignItems: 'center',
              }}>
              {/* @ts-ignore */}
              <SVGIcon height={18} type="kebab" width={18} />
            </TouchableOpacity>
          }>
          {/* <Menu.Item onPress={() => {}} title="Unfollow" /> */}
          <Menu.Item onPress={() => {}} title="Report" />
        </Menu>
      </View>
      <View style={styles.contentContainer}>
        <TextInline text={postContent} targetLines={2} />
      </View>
      <TouchableOpacity onPress={() => console.log('Image Button Pressed')}>
        <View style={styles.imageContainer}>
          {/* <ScaledImage height={300} source={item.image}></ScaledImage> */}
          {/* <Lightbox style={{flex: 1}}> */}
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
        <TouchableOpacity
          style={styles.commentIcon}
          onPress={() => console.log('Comment Button Pressed')}>
          <CommentIcon size="20" color="#001d3d" />
          <Text
            style={{
              ...styles.reactionText,
              color: '#001d3d',
              // paddingRight: 10,
              // paddingVertical: 2,
            }}>
            646
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Share Button Pressed')}
          style={styles.shareIcon}>
          <ShareIcon size="20" color="#081c15" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
