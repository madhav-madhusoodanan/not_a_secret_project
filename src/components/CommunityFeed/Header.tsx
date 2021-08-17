import React, {FC, memo, useMemo} from 'react';
import {ImageProps, StyleSheet, Text, View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {headerStyles} from './HeaderStyles';

type Props = Pick<ViewProps, 'style'> & {
  photo: string;
  name: string;
  bio: string;
};

const Header = () => {
  const containerStyle = useMemo(() => [headerStyles.container], []);

  return (
    <View style={containerStyle}>
      <FastImage
        style={headerStyles.photo}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={headerStyles.textContainer}>
        <Text style={headerStyles.name}>JEE Mentorship</Text>
        <Text style={headerStyles.bio}>by Nishant Jindal</Text>
      </View>
    </View>
  );
};

export default memo(Header);
