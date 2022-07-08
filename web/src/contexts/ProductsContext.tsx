import { createContext, ReactNode, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Product } from '../interfaces/Product';
import { ConfirmDialog, Toast } from '../utils/swal';
import { api } from '../services/api';

type ProductsProviderProps = {
  children: ReactNode;
};

type ProductFormData = {
  image: string;
  name: string;
  price: number;
  description: string;
  active: boolean;
};

type ProductsContextData = {
  products: Product[];
  addProduct: (product: ProductFormData) => Promise<void>;
  updateProduct: (id: string, product: ProductFormData) => Promise<void>;
  removeProduct: (id: string) => Promise<void>;
};

export const ProductsContext = createContext({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const history = useHistory();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('pizzas').then(response => {
      setProducts(response.data);
    });
  }, []);

  async function addProduct(product: ProductFormData) {
    const response = await api.post('pizzas', product);
    const newProduct = response.data as Product;

    setProducts([...products, newProduct]);
    history.push('/');

    await Toast.fire({
      icon: 'success',
      title: 'Produto adicionado com sucesso',
    });
  }

  async function updateProduct(id: string, product: ProductFormData) {
    const response = await api.put(`/pizzas/${id}`, product);
    const updatedProduct = response.data as Product;

    setProducts(
      products.map(product => {
        if (product._id === id) return updatedProduct;
        return product;
      })
    );

    history.push('/');

    await Toast.fire({
      icon: 'success',
      title: 'Produto editado com sucesso',
    });
  }

  async function removeProduct(id: string) {
    const canDelete = await ConfirmDialog.fire({
      text: 'Deseja realmente deletar o produto ?',
    });

    if (canDelete.value) {
      await api.delete(`/pizzas/${id}`);
      setProducts(products.filter(product => product._id !== id));

      await Toast.fire({
        icon: 'success',
        title: 'Produto removido com sucesso',
      });
    }
  }

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, updateProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
