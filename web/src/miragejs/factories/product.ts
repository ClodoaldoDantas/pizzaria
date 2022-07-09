import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';
import { getRandomBoolean } from './utils';

export default {
  product: Factory.extend({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.food(),
    active: getRandomBoolean(),
    price: 20,
  }),
};
