import { createServer, Serializer, Response } from 'miragejs';

import models from './models';
import factories from './factories';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    models,
    serializers: {
      product: Serializer.extend({
        keyForAttribute: attr => {
          if (attr === 'id') return '_id';
          return attr;
        },
        root: false,
        embed: true,
      }),
    },
    factories,
    seeds(server) {
      server.createList('product', 2);
    },
    routes() {
      this.urlPrefix = 'http://localhost:3000';
      this.namespace = '/api';

      this.get('/pizzas', schema => schema.all('product'));

      this.post('/pizzas', (schema, request) => {
        let body = JSON.parse(request.requestBody);
        return schema.create('product', body);
      });

      this.put('/pizzas/:id', (schema, request) => {
        let body = JSON.parse(request.requestBody);
        return schema.db.products.update(request.params.id, body);
      });

      this.delete('/pizzas/:id', (schema, request) => {
        schema.find('product', request.params.id)?.destroy();
        return new Response(204);
      });
    },
  });
}
