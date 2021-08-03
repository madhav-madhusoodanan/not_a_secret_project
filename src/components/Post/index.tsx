import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import CommentIcon from '@iconscout/react-native-unicons/icons/uil-comment';
import ShareIcon from '@iconscout/react-native-unicons/icons/uil-share-alt';
import HeartIcon from '@iconscout/react-native-unicons/icons/uil-heart';

import {Menu} from 'react-native-paper';
import Lightbox from 'react-native-lightbox-v2';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {SVGIcon} from './../SVGIcon';

import {styles} from './styles';

export default function Post() {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

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
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  Nishant's Advanced Math 2021
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.extraInfoWrapper}>
              <Text style={{color: 'gray', fontSize: 14, marginRight: 5}}>
                5h
              </Text>

              <SVGIcon height={4} type="dot" width={4} />

              <Text style={{fontSize: 12, marginLeft: 5, color: 'gray'}}>
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
              <SVGIcon height={18} type="kebab" width={18} />
            </TouchableOpacity>
          }>
          <Menu.Item onPress={() => {}} title="Unfollow" />
          <Menu.Item onPress={() => {}} title="Report" />
        </Menu>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>
          The packages given in my coaching are really comprehensive. They are
          usually completed along with the chapter as the teachers give regular
          homework from them. It may not be a national level institute but
          believe me, I have seen Allen's and FIITJEE's material and ours have a
          mixture of questions from all of them. What should I do? #doubt
          #dcpandey
        </Text>
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
        <TouchableOpacity style={styles.reactionIcon}>
          <HeartIcon size="25" color="#e8304a" />
          <Text style={{...styles.reactionText, color: '#e8304a'}}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.reactionIcon}
          onPress={() => console.log('Comment Button Pressed')}>
          <CommentIcon size="20" color="#001d3d" />
          <Text
            style={{
              ...styles.reactionText,
              color: '#001d3d',
              paddingRight: 10,
              paddingVertical: 2,
            }}>
            4
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
