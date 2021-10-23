import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OrderItem } from '../../components/OrderItem';
import { Container } from '../../components/Container';
import { useOrders } from '../../contexts/OrdersContext';

export function Orders() {
  const navigation = useNavigation();
  const { orders } = useOrders();

  function handleNavigate(orderId: string) {
    navigation.navigate('Order', { orderId });
  }

  return (
    <Container>
      <FlatList
        data={orders}
        keyExtractor={item => item._id}
        contentContainerStyle={{
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <OrderItem order={item} onNavigate={handleNavigate} />
        )}
      />
    </Container>
  );
}
