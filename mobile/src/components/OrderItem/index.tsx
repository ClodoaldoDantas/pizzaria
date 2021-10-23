import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Currency } from '../Currency';
import { orderLabels, orderVariants } from '../../utils/orderUtils';
import { OrderType } from '../../interfaces/Order';
import { styles } from './styles';

type OrderItemProps = {
  order: OrderType;
  onNavigate: (orderId: string) => void;
};

export function OrderItem({ order, onNavigate }: OrderItemProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onNavigate(order._id)}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: order.item.image }}
        />

        <View style={styles.productInfo}>
          <Text style={styles.name}>{order.item.name}</Text>
          <Text style={styles.description}>{order.item.description}</Text>

          <View style={styles.productFooter}>
            <Currency value={order.total} />
            <Text
              style={[
                styles.badge,
                { backgroundColor: orderVariants[order.status] },
              ]}
            >
              {orderLabels[order.status]}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
