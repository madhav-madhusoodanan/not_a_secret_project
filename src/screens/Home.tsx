import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

export default function Home() {
  return (
    <View>
      <Button
        mode="contained"
        style={{
          width: '50%',
        }}>
        Hello
      </Button>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
