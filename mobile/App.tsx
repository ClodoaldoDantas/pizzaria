import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { OrdersProvider } from './src/contexts/OrdersContext';
import { Routes } from './src/routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <OrdersProvider>
          <Routes />
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        </OrdersProvider>
      </NavigationContainer>
    </View>
  );
}
