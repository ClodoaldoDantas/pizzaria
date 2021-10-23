import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ProductType } from '../../interfaces/Product';
import { Currency } from '../Currency';
import { styles } from './styles';

type ProductItemProps = {
  product: ProductType;
  onNavigate: (productId: string) => void;
};

export function ProductItem({ product, onNavigate }: ProductItemProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onNavigate(product._id)}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.image }}
        />

        <View style={styles.productInfo}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Currency value={product.price} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
