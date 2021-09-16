import React, {useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import Post from '../../../components/Post';
import {styles} from './styles';
import SkeletonView from '../../../components/Post/SkeletonView';
import {getNames} from '../../../store/Actions/CommunityActions';
export default function HomeFeedScreen({}) {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const post = useSelector((state: any) => state.Post);
  const fetchNames = async () => {
    await dispatch(getNames())
  }
  useEffect(() => {
    fetchNames();
  }, []);

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
        <SkeletonView />
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
