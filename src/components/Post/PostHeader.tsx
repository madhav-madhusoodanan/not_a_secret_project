import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Menu} from 'react-native-paper';
import {SVGIcon} from '../SVGIcon';
import {useDispatch, useSelector} from 'react-redux';
import {PROFILE_LOADING} from '../../store/types';
import FastImage from 'react-native-fast-image';
import {deletePost} from '../../store/Actions/PostActions';
const PostHeader = ({styles, navigateToCommunity, post}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const {user} = useSelector((state: any) => state.Auth);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const timee = () => {
    function between(x, min, max) {
      return x >= min && x <= max;
    }
    let today = new Date();
    let Christmas = new Date(post.createdAt);
    // @ts-ignore
    let diffMin = (today - Christmas) / 60000;
    if (diffMin < 1) {
      return 'Just now';
    } else if (between(diffMin, 1, 60)) {
      return `${diffMin}m`;
    } else if (between(diffMin, 60, 1440)) {
      return `${diffMin / 60}h`;
    } else {
      return `${diffMin / 1440}d`;
    }
  };
  const deletePress = () => {
    setVisible(false);
    Alert.alert(
      'Delete the Post',
      'Are you sure you want to delete the post?',
      [
        {
          text: 'Delete',
          onPress: async () => {
            setVisible(false);
            await dispatch(deletePost(post._id));
          },
          style: 'default',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true, onDismiss: () => setVisible(false)},
    );
  };
  const usernamePress = async () => {
    if (user._id === author._id) {
      /* @ts-ignore */
      navigate('Home', {screen: 'you'});
      return;
    }
    dispatch({type: PROFILE_LOADING});
    /* @ts-ignore */
    navigate('Profile', {
      screen: 'PeerProfileScreen',
      params: {id: author._id, username: author.username},
    });
  };
  const inlineStyle = StyleSheet.create({
    viewOuter: {flexDirection: 'row', alignItems: 'center'},
    postHeader: {fontSize: 14, fontFamily: 'Inter-Bold', color: '#1E2022'},
    time: {
      color: 'gray',
      fontSize: 12,
      marginRight: 5,
      fontFamily: 'Inter-Regular',
    },
    postedBy: {
      fontSize: 12,
      marginLeft: 5,
      color: 'gray',
      fontFamily: 'Inter-Regular',
    },
    menu: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
  });
  const {community, author} = post;
  const t = timee();
  return (
    <View style={inlineStyle.viewOuter}>
      <View style={styles.customListView}>
        <FastImage
          style={styles.avatar}
          source={{
            uri: community.coverImage.uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.infoWrapper}>
          <View style={styles.namesWrapper}>
            <TouchableOpacity onPress={navigateToCommunity}>
              <Text style={inlineStyle.postHeader}>{community.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.extraInfoWrapper}>
            <Text style={inlineStyle.time}>
              {t === 'Just now'
                ? 'Just now'
                : `${Math.round(
                    parseFloat(t.substring(0, t.length - 1)),
                  )}${t.substring(t.length - 1, t.length)}`}
            </Text>
            {/* @ts-ignore */}
            <SVGIcon height={4} type="dot" width={4} />

            <Text style={inlineStyle.postedBy}>Posted by {''}</Text>
            <TouchableOpacity onPress={usernamePress}>
              <Text
                style={{
                  color: '#302D22',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 12,
                }}>
                @{author.username}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu} style={inlineStyle.menu}>
            {/* @ts-ignore */}
            <SVGIcon height={18} type="kebab" width={18} />
          </TouchableOpacity>
        }>
        <Menu.Item onPress={timee} title="Report" />
        {author._id === user._id && (
          <Menu.Item
          title='Delete'
            onPress={deletePress}
            />
        )}
      </Menu>
    </View>
  );
};

export default PostHeader;
