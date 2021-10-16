import React from 'react';
import { View, Text, Image } from 'react-native';
import { Product } from '../../interfaces/Product';
import { styles } from './styles';

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: product.image }}
      />

      <View style={styles.productInfo}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
}
