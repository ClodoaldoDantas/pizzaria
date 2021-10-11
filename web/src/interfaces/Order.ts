import { Product } from './Product';

export type Order = {
  _id: string;
  item: Product;
  quantity: number;
  total: number;
  status: 'PENDING' | 'PREPARING' | 'DONE' | 'CANCELLED';
};
