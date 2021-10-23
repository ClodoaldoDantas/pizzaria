import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { ProductType } from '../../interfaces/Product';
import { ProductItem } from '../../components/ProductItem';
import { Container } from '../../components/Container';

export function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    api.get('pizzas').then(response => {
      setProducts(response.data as ProductType[]);
    });
  }, []);

  function handleNavigate(productId: string) {
    navigation.navigate('Product', { productId });
  }

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductItem product={item} onNavigate={handleNavigate} />
        )}
      />
    </Container>
  );
}
