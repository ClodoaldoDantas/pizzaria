import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OrderItem } from '../../components/OrderItem';
import { useOrders } from '../../contexts/OrdersContext';
import { styles } from './styles';

export function Orders() {
  const navigation = useNavigation();
  const { orders } = useOrders();

  function handleNavigate(productId: string) {
    navigation.navigate('Order', { productId });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <OrderItem order={item} onNavigate={handleNavigate} />
        )}
      />
    </SafeAreaView>
  );
}
