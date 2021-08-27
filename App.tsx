import Reactotron from './src/constants/Reactotron';
import React, {useEffect} from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {LogBox, View, StatusBar, Appearance} from 'react-native';
import {Theme} from './src/constants/appTheme';
import {store} from './src/store';
import Routes from './Routes';

LogBox.ignoreAllLogs();

export default () => {
  const scheme = Appearance.getColorScheme();

  useEffect(() => {
    // Reactotron
    if (__DEV__) {
      Reactotron.connect();
      console.log(__DEV__);
    }
  }, []);
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
        },
      }}>
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <StatusBar
            animated={true}
            barStyle="dark-content"
            backgroundColor={Theme.colors.background}
          />
          <NavigationContainer theme={Theme}>
            <View style={{flex: 1}}>
              <Routes />
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      </ReduxProvider>
    </PaperProvider>
  );
};
