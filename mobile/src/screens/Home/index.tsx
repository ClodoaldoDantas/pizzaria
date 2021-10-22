import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { api } from '../../services/api';
import { ProductType } from '../../interfaces/Product';
import { ProductItem } from '../../components/ProductItem';
import { styles } from './styles';

export function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    api.get('pizzas').then(response => {
      setProducts(response.data as ProductType[]);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </SafeAreaView>
  );
}
