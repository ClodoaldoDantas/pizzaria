import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { OrderItem } from '../../components/OrderItem';
import { Container } from '../../components/Container';
import { useOrders } from '../../contexts/OrdersContext';
import { styles } from './styles';
import { colors } from '../../theme/colors';

export function Orders() {
  const navigation = useNavigation();
  const { orders } = useOrders();

  function handleNavigate(orderId: string) {
    navigation.navigate('Order', { orderId });
  }

  return (
    <Container>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <OrderItem order={item} onNavigate={handleNavigate} />
          )}
        />
      ) : (
        <View style={styles.cartEmptyContainer}>
          <Feather name="shopping-bag" size={64} color={colors.gray_500} />
          <Text style={styles.cartEmptyTitle}>Sem itens no carrinho</Text>
        </View>
      )}
    </Container>
  );
}
