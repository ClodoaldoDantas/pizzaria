import { Model } from 'miragejs';
import { Product } from '../../interfaces/Product';

export default {
  product: Model.extend<Partial<Product>>({}),
};
