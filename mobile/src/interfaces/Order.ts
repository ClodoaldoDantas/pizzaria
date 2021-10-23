import { ProductType } from './Product';

export type OrderType = {
  _id: string;
  item: ProductType;
  quantity: number;
  total: number;
  status: 'PENDING' | 'PREPARING' | 'DONE' | 'CANCELLED';
};
