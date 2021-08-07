import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text} from 'react-native';
import {Button, Headline} from 'react-native-paper';
import {styles} from './styles';

export default function CreatePostBottomSheetContent({}) {
  return (
    <View style={styles.container}>
      <Headline style={styles.headline}> Create Post </Headline>
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </View>
  );
}
