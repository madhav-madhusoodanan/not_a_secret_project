import React, {useEffect} from 'react';
import {LogBox, View, StatusBar, Appearance} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {Theme} from './src/constants/appTheme';
import {store} from './src/store';
import Routes from './Routes';
import Reactotron from './src/constants/Reactotron';

LogBox.ignoreAllLogs();

export default () => {
  const scheme = Appearance.getColorScheme();

  useEffect(() => {
    // Reactotron
    if (__DEV__) {
      Reactotron.connect();
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
              <FlashMessage position="top" autoHide duration={2000} animated />
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      </ReduxProvider>
    </PaperProvider>
  );
};
