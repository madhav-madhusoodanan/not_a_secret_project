import React, {useEffect} from 'react';
import {View, Alert, Animated, ScrollView} from 'react-native';
import {FAB, ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StickyItemFlatList from '@gorhom/sticky-item';
import {useSelector} from 'react-redux';
import Post from '../../../components/Post';
import {styles} from './styles';

export default function HomeFeedScreen({}) {
  const {navigate} = useNavigation();
  const post = useSelector((state: any) => state.Post);

  useEffect(() => {}, [post.posts]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.listContainter}>
        {post.posts ? (
          post.posts.map((p, i) => {
            return <Post post={p} allowed key={i} />;
          })
        ) : (
          <ActivityIndicator animating color="#000" />
        )}
      </ScrollView>
      <FAB
        style={styles.fab}
        label={'Post'}
        icon="plus"
        color={'white'}
        // @ts-ignore
        onPress={() => navigate('Post', {screen: 'CreatePostScreen'})}
      />
    </SafeAreaView>
  );
}
