import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import CommunityCard from '../../../components/CommunityCard';
import {getCommunities} from '../../../store/Actions/CommunityActions';

export default function ExploreScreen() {
  const dispatch = useDispatch();
  const community = useSelector((state: any) => state.Community);
  const [searchQuery, setSearchQuery] = React.useState('');
  const fetchCommunities = async () => {
    await dispatch(getCommunities());
  };
  useEffect(() => {
    fetchCommunities();
  }, []);

  console.log(community);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.viewContainer}>
        {!community.loading  && community.communities ? (
          community.communities.map(c => (
            <>
              <CommunityCard community={c} key={c._id} />
            </>
          ))
        ) : (
          <ActivityIndicator animating color="#000" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
