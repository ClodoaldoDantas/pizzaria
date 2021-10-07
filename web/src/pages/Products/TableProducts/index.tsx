import cx from 'classnames';
import { Table, Button } from 'react-bootstrap';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Product } from '../../../interfaces/Product';
import './styles.scss';

type TableProductsProps = {
  products: Product[];
  onEdit: (productId: string) => void;
};

export function TableProducts({ products, onEdit }: TableProductsProps) {
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
        {products.map(product => (
          <tr key={product._id}>
            <td className="product-image">
              <img src={product.image} alt={product.name} />
            </td>
            <td>
              <strong>{product.name}</strong>
              <p className="fs-6 fw-light">{product.description}</p>
            </td>
            <td>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </td>
            <td
              className={cx(
                { 'text-success': product.active },
                { 'text-danger': !product.active }
              )}
            >
              {product.active ? 'Sim' : 'Não'}
            </td>

            <td>
              <div className="actions">
                <Button
                  onClick={() => onEdit(product._id)}
                  variant="warning"
                  size="sm"
                >
                  <MdEdit size={18} />
                </Button>

                <Button variant="danger" size="sm">
                  <MdDelete size={18} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
