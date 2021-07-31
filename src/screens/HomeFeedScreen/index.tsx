import React from 'react';
import {View, Text} from 'react-native';
import {Button, Headline} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

export default function HomeFeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        mode="contained"
        onPress={() => console.log('Button Pressed')}
        style={{
          width: '50%',
        }}>
        Hello
      </Button> */}
      <Headline style={styles.headline}>Headline</Headline>
    </SafeAreaView>
  );
}
