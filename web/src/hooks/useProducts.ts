import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

export const useProducts = () => useContext(ProductsContext);
