import React from 'react';
import {RefreshControl, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Colors,
  Card,
  List,
  Subheading,
  Title,
} from 'react-native-paper';
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
        <Card
          style={{
            borderRadius: 12,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#F8F8F9',
            elevation: 10,
            marginTop: 10,
          }}>
          <Title style={{color: '#000', paddingLeft: 15, paddingVertical: 10}}>
            Group Details
          </Title>
          <List.Subheader style={{color: 'gray', paddingLeft: 15}}>
            Created
          </List.Subheader>
          <List.Item
            title="13 October, 2021 by Aman Dhattarwal"
            titleStyle={{color: '#000'}}
            style={{
              height: 50,
              justifyContent: 'center',
              // marginBottom: 10,
            }}
          />
          <List.Subheader style={{color: 'gray', paddingLeft: 15}}>
            Privacy settings
          </List.Subheader>
          <List.Item
            title="Private"
            titleStyle={{color: '#000'}}
            style={{
              height: 50,
              justifyContent: 'center',
              // marginBottom: 10,
            }}
          />
        </Card>
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
