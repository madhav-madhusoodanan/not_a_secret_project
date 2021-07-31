import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default function HomeFeedScreen() {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => console.log('Button Pressed')}
        style={{
          width: '50%',
        }}>
        Hello
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
