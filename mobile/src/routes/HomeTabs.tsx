import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.red_500,
        },
        headerTitleStyle: { fontFamily: fonts.semiBold, color: colors.white },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.red_500,
        tabBarInactiveTintColor: colors.gray_300,
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 14 },
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 56,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 1,
          borderTopColor: '#E4E4EB',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Cardápio',
          tabBarLabel: 'Cardápio',
          tabBarIcon: ({ size, color }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          title: 'Meus Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
