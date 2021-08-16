import React from 'react';
import {RefreshControl, StyleSheet, Text, View} from 'react-native';
import {ComAnimatedTabView} from '../Library';

const CommunityAbout = ({
  styles,
  isActive,
  routeKey,
  scrollY,
  trackRef,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  data,
}) => {
  return (
    <ComAnimatedTabView
      data={data}
      windowSize={3}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => null} />
      }
      renderItem={({item}: any) => (
        <View style={styles.container}>
          <View style={styles.inner}>
            <Text>{item.title}</Text>
            {/* <Post allowed /> */}
          </View>
        </View>
      )}
      onRef={(ref: any) => {
        trackRef(routeKey, ref);
      }}
      scrollY={isActive ? scrollY : undefined}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
    />
  );
};

export default CommunityAbout;

const styles = StyleSheet.create({});
