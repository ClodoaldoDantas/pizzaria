import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MdEdit, MdDelete } from 'react-icons/md';

import { Product } from '../../../interfaces/Product';
import { useProducts } from '../../../hooks/useProducts';
import './styles.scss';

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  const { removeProduct } = useProducts();

  const history = useHistory();
  const navigateToEditProduct = () => history.push(`/products/${product._id}`);

  return (
    <tr>
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
          <Button onClick={navigateToEditProduct} variant="warning" size="sm">
            <MdEdit size={18} />
          </Button>

          <Button
            onClick={() => removeProduct(product._id)}
            variant="danger"
            size="sm"
          >
            <MdDelete size={18} />
          </Button>
        </div>
      </td>
    </tr>
  );
}
