import React, {useEffect, useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import CommunityCard from '../../../components/CommunityCard';
import {getCommunities} from '../../../store/Actions/CommunityActions';
import {useIsFocused} from '@react-navigation/native';

export default function ExploreScreen() {
  const dispatch = useDispatch();
  const community = useSelector((state: any) => state.Community);
  const [searchQuery, setSearchQuery] = React.useState('');
  const isFocused = useIsFocused();
  const fetchCommunities = async () => {
    await dispatch(getCommunities('populate_createdBy=firstName,lastName'));
  };
  useEffect(() => {
    if (isFocused) {
      fetchCommunities();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Explore Creators"
          onChangeText={query => setSearchQuery(query)}
          placeholderTextColor="gray"
          style={styles.searchbar}
          value={searchQuery}
        />
      </View>
      {community.communities ? (
        <FlatList
          data={community.communities}
          renderItem={({item}) => (
            <>
              <CommunityCard community={item} />
            </>
          )}
          showsVerticalScrollIndicator={false}
          overScrollMode={'never'}
          style={styles.viewContainer}
          keyExtractor={item => item._id.toString()}
        />
      ) : (
        <ActivityIndicator animating color='#000' />
      )}
    </SafeAreaView>
  );
}
