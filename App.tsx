import Reactotron from './src/config/Reactotron';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View>
          <Text>Home</Text>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
