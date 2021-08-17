import React, {FC, memo, useMemo} from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';
import {headerStyles} from './HeaderStyles';

type Props = Pick<ViewProps, 'style'> & {
  photo: string;
  name: string;
  bio: string;
};

const Header = () => {
  const containerStyle = useMemo(() => [headerStyles.container], []);

  const photoSource = useMemo<ImageProps['source']>(
    () => ({
      uri: 'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
    }),
    [],
  );

  return (
    <View style={containerStyle}>
      <Image style={headerStyles.photo} source={photoSource} />
      <View style={headerStyles.textContainer}>
        <Text style={headerStyles.name}>JEE Mentorship</Text>
        <Text style={headerStyles.bio}>Let's get starnidsted 🚀</Text>
      </View>
    </View>
  );
};

export default memo(Header);
