import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabs } from './HomeTabs';
import { Product } from '../pages/Product';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';
import { Order } from '../pages/Order';
import { getHeaderTitle } from '../utils/getHeaderTitle';

const Stack = createStackNavigator();

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
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />

      <Stack.Screen
        options={{ title: 'Produto' }}
        name="Product"
        component={Product}
      />

      <Stack.Screen
        options={{ title: 'Pedido' }}
        name="Order"
        component={Order}
      />
    </Stack.Navigator>
  );
}
