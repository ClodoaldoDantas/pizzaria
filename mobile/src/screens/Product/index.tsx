import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';
import { ProductType } from '../../interfaces/Product';
import { Currency } from '../../components/Currency';
import { Button } from '../../components/Button';
import { styles } from './styles';

type Params = {
  productId: string;
};

export function Product() {
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params as Params;
  const [product, setProduct] = useState<ProductType>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    api.get(`pizzas/${productId}`).then(response => {
      setProduct(response.data as ProductType);
    });
  }, []);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  async function addOrder() {
    await api.post('orders', { item: productId, quantity });
    navigation.navigate('Orders');
  }

  if (!product) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />

        <View style={styles.cardInfo}>
          <Text style={styles.name}>{product?.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Currency value={product.price} fontSize={20} />
        </View>
      </View>

      <View>
        <Text style={styles.footerTitle}>Total do pedido</Text>

        <View style={styles.footerContent}>
          <Currency
            value={Number((product.price * quantity).toFixed(2))}
            fontSize={24}
          />

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={decrement}
              style={[
                styles.quantityItem,
                { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
              ]}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <View style={styles.quantityItem}>
              <Text style={styles.quantityText}>{quantity}</Text>
            </View>

            <TouchableOpacity
              onPress={increment}
              style={[
                styles.quantityItem,
                { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
              ]}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Confirmar Pedido" onPress={addOrder} />
      </View>
    </SafeAreaView>
  );
}
