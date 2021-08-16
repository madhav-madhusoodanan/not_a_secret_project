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

const CommunityAbout = () => {
  return (
    <Card
      style={{
        borderRadius: 12,
        width: '88%',
        alignSelf: 'center',
        // backgroundColor: '#F8F8F9',
        elevation: 10,
        marginTop: 120,
      }}>
      <Title style={{color: '#000', paddingLeft: 15, paddingVertical: 10}}>
        Group Details
      </Title>
      <Subheading style={{color: 'gray', paddingLeft: 15}}>Created</Subheading>
      <List.Item
        title="13 October, 2021 by Aman Dhattarwal"
        titleStyle={{color: '#000'}}
        style={{
          height: 50,
          justifyContent: 'center',
          // marginBottom: 10,
        }}
        left={() => (
          <List.Icon icon="clock-time-four-outline" color={Colors.black} />
        )}
      />
      <Subheading style={{color: 'gray', paddingLeft: 15}}>
        Privacy settings
      </Subheading>
      <List.Item
        title="Private"
        titleStyle={{color: '#000'}}
        style={{
          height: 50,
          justifyContent: 'center',
          // marginBottom: 10,
        }}
        left={() => <List.Icon icon="lock-outline" color={Colors.black} />}
      />
    </Card>
  );
};

export default CommunityAbout;

const styles = StyleSheet.create({});
