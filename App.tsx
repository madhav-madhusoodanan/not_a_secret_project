import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import {Button} from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        icon="camera"
        mode="contained"
        style={styles.button}
        onPress={() => console.log('Pressed')}
        color="green">
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
});
