import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../interfaces/Product';
import { Currency } from '../Currency';
import { styles } from './styles';

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Product', { productId: product._id });
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
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
