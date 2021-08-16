import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Menu} from 'react-native-paper';
import { SVGIcon } from '../SVGIcon';

const PostHeader = ({styles, navigateToCommunity}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.customListView}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
          }}></Image>
        <View style={styles.infoWrapper}>
          <View style={styles.namesWrapper}>
            <TouchableOpacity onPress={navigateToCommunity}>
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
        <Menu.Item onPress={() => {}} title="Report" />
      </Menu>
    </View>
  );
};

export default PostHeader;
