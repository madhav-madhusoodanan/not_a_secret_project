import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Explore Communities"
        onChangeText={onChangeSearch}
        style={styles.searchbar}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
