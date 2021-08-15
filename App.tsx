import Reactotron from './src/constants/Reactotron';
import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {LogBox, View, StatusBar, Appearance} from 'react-native';
import {Theme} from './src/constants/appTheme';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import CommunityNavigator from './src/navigation/CommunityNavigator';
import Splash from './src/screens/Splash';
import {store} from './src/store';
LogBox.ignoreAllLogs();

const RootStack = createStackNavigator();

export default () => {
  const scheme = Appearance.getColorScheme();

  useEffect(() => {
    // Reactotron
    if (__DEV__) {
      Reactotron.connect();
    }
  }, []);
  return (
    <PaperProvider>
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <StatusBar
            animated={true}
            barStyle="dark-content"
            backgroundColor={Theme.colors.background}
          />
          <NavigationContainer theme={Theme}>
            <View style={{flex: 1}}>
              <RootNavigation />
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      </ReduxProvider>
    </PaperProvider>
  );
};

const RootNavigation = () => {
  return (
    <BottomSheetModalProvider>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        {/* change initial route to Splash on production */}
        <RootStack.Screen component={Splash} name="Splash" />
        <RootStack.Screen component={AuthNavigator} name="Auth" />
        <RootStack.Screen component={HomeNavigator} name="Home" />
        <RootStack.Screen
          component={CommunityNavigator}
          name="CommunityFeedScreen"
        />
      </RootStack.Navigator>
    </BottomSheetModalProvider>
  );
};
