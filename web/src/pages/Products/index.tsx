import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { PageHeader } from '../../components/PageHeader';
import { TableProducts } from './TableProducts';

export function Products() {
  const history = useHistory();

  function navigateToAddProduct() {
    history.push('/products/new');
  }

  return (
    <section id="page-products">
      <PageHeader title="Produtos" />

      <Button onClick={navigateToAddProduct} className="mb-3">
        Adicionar Produto
      </Button>

      <TableProducts />
    </section>
  );
}
