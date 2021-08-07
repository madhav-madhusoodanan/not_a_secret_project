import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {styles} from './styles';

export default function CreatePostBottomSheetContent({}) {
  return (
    <View style={styles.container}>
      <Text>Awesome 🎉</Text>
    </View>
  );
};

