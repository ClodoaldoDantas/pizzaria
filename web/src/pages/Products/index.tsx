import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Product } from '../../interfaces/Product';
import { api } from '../../services/api';

import { PageHeader } from '../../components/PageHeader';
import { TableProducts } from './TableProducts';
import { ConfirmDialog, Toast } from '../../utils/swal';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get('pizzas').then(response => {
      setProducts(response.data);
    });
  }, []);

  function navigateToAddProduct() {
    history.push('/products/new');
  }

  function navigateToEditProduct(productId: string) {
    history.push(`/products/${productId}`);
  }

  async function deleteProduct(productId: string) {
    const canDelete = await ConfirmDialog.fire({
      text: 'Deseja realmente deletar o produto ?',
    });

    if (canDelete.value) {
      await api.delete(`/pizzas/${productId}`);
      setProducts(products.filter(product => product._id !== productId));

      await Toast.fire({
        icon: 'success',
        title: 'Produto removido com sucesso',
      });
    }
  }

  return (
    <section id="page-products">
      <PageHeader title="Produtos" />

      <Button onClick={navigateToAddProduct} className="mb-3">
        Adicionar Produto
      </Button>

      <TableProducts
        onEdit={navigateToEditProduct}
        onDelete={deleteProduct}
        products={products}
      />
    </section>
  );
}
