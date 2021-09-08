import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Divider, Subheading, FAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import styles from './styles';
import Post from '../../../components/Post';
import CreatePostBottomSheetContent from './../../HomeScreens/CreatePostScreen';

export default function FeedScreen({navigator}) {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.listContainter}>
        {/* <Divider style={styles.divider} /> */}
        {/* <Post allowed />
        <Post allowed />
        <Post allowed /> */}
      </ScrollView>
      <FAB
        style={styles.fab}
        label={'Post'}
        icon="plus"
        color={'white'}
        onPress={handlePresentModalPress}
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        stackBehavior={'push'}
        index={1}
        name={'Create Post'}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <CreatePostBottomSheetContent />
      </BottomSheetModal>
    </SafeAreaView>
  );
}
