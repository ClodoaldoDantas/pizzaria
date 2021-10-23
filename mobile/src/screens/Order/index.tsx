import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { styles } from './styles';
import { useOrders } from '../../contexts/OrdersContext';
import { Container } from '../../components/Container';

type Params = {
  orderId: string;
};

export function Order() {
  const route = useRoute();
  const { orders } = useOrders();
  const { orderId } = route.params as Params;
  const order = orders.find(order => order._id === orderId);

  if (!order) {
    return null;
  }

  return (
    <Container>
      <Text style={styles.name}>Produto: {order.item.name}</Text>
      <Text style={styles.quantity}>Quantidade: {order.quantity}</Text>
    </Container>
  );
}
