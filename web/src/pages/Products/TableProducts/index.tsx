import { Table } from 'react-bootstrap';
import { useProducts } from '../../../hooks/useProducts';
import { ProductItem } from '../ProductItem';

export function TableProducts() {
  const { products } = useProducts();

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {products.length === 0 && (
          <tr>
            <td className="text-center" colSpan={5}>
              Nenhum produto cadastrado 🍕
            </td>
          </tr>
        )}

        {products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </tbody>
    </Table>
  );
}
