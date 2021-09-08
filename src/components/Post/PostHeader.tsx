import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Menu} from 'react-native-paper';
import {SVGIcon} from '../SVGIcon';

const PostHeader = ({styles, navigateToCommunity, post}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { navigate } = useNavigation()
  const inlineStyle = StyleSheet.create({
    viewOuter: {flexDirection: 'row', alignItems: 'center'},
    postHeader: {fontSize: 13, fontFamily: 'Inter-Medium'},
    time: {
      color: 'gray',
      fontSize: 12,
      marginRight: 5,
      fontFamily: 'Inter-Regular',
    },
    postedBy: {
      fontSize: 13,
      marginLeft: 5,
      color: 'gray',
      fontFamily: 'Inter-Regular',
    },
    menu: {
      // width: 25,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      // backgroundColor: 'red',
      alignItems: 'center',
    },
  });
  const {community, author} = post;
  return (
    <View style={inlineStyle.viewOuter}>
      <View style={styles.customListView}>
        <Image
          style={styles.avatar}
          source={{
            uri: community.coverImage.uri,
          }}></Image>
        <View style={styles.infoWrapper}>
          <View style={styles.namesWrapper}>
            <TouchableOpacity onPress={navigateToCommunity}>
              <Text style={inlineStyle.postHeader}>{community.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.extraInfoWrapper}>
            <Text style={inlineStyle.time}>5h</Text>
            {/* @ts-ignore */}
            <SVGIcon height={4} type="dot" width={4} />

            <Text style={inlineStyle.postedBy}>
              Posted by
              {/* @ts-ignore */}
              <TouchableOpacity onPress={() => navigate('you',{id: author._id})}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                @{author.username}
              </Text>
              </TouchableOpacity>
            </Text>
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
        <Menu.Item onPress={() => {}} title="Report" />
      </Menu>
    </View>
  );
};

export default PostHeader;
