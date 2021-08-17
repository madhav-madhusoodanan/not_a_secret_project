import React, {FC, memo, useMemo} from 'react';
import {
  ImageProps,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {headerStyles} from './HeaderStyles';
import {Button} from 'react-native-paper';
import MenuIcon from '@iconscout/react-native-unicons/icons/uil-ellipsis-h';

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
      <View style={headerStyles.infoContainer}>
        <Text style={headerStyles.name}>JEE Mentorship</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={headerStyles.stats}>131k</Text>
          <Text style={headerStyles.statsacomp}>Members</Text>
        </View>

        <View style={headerStyles.buttonContainer}>
          <Button
            mode={'contained'}
            color={'#00AAFF'}
            contentStyle={headerStyles.followButtonContentStyles}
            style={headerStyles.followButtonStyles}
            labelStyle={headerStyles.followButtonLabelStyles}
            onPress={() => console.log('Follow Button Pressed')}>
            Follow
          </Button>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
