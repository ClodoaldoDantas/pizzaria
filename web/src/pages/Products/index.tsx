import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import { api } from '../../services/api';

import { PageHeader } from '../../components/PageHeader';
import { TableProducts } from './TableProducts';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('pizzas').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section id="page-products">
      <PageHeader title="Produtos" />

      <Button className="mb-3">Adicionar Produto</Button>

      <TableProducts products={products} />
    </section>
  );
}
