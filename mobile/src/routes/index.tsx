import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeTabs } from './HomeTabs';
import { Product } from '../pages/Product';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.red_500,
        },
        headerTitleStyle: {
          fontFamily: fonts.semiBold,
          color: colors.white,
        },
        headerTintColor: colors.yellow_500,
        headerTitleAlign: 'center',
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        options={{ title: 'Produto' }}
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  );
}
