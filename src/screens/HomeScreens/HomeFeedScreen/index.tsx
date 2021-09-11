import React, {useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';
import {FAB, ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import Post from '../../../components/Post';
import {styles} from './styles';

export default function HomeFeedScreen({}) {
  const {navigate} = useNavigation();
  const post = useSelector((state: any) => state.Post);

  useEffect(() => {}, [post.posts]);

  return (
    <SafeAreaView style={styles.container}>
      {post.posts ? (
        <FlatList
          data={post.posts}
          renderItem={({item}) => (
            <>
              <Post post={item} allowed />
            </>
          )}
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          style={styles.listContainter}
          keyExtractor={item => item._id.toString()}
        />
      ) : (
        <ActivityIndicator animating color="#000" />
      )}
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
