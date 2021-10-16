import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { api } from '../../services/api';
import { Product } from '../../interfaces/Product';
import { ProductItem } from '../../components/ProductItem';
import { styles } from './styles';

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('pizzas').then(response => {
      setProducts(response.data as Product[]);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </SafeAreaView>
  );
}
