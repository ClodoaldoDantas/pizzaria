import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { faker } from '@faker-js/faker';

import { ProductItem } from '../../pages/Products/ProductItem';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

type Params = {
  isActive: boolean;
};

const renderProductItem = ({ isActive }: Params) => {
  const product = {
    _id: '1',
    name: 'Pizza de Calabresa',
    description: 'descrição da pizza de calabresa',
    price: 40,
    active: isActive,
    image: faker.image.food(),
  };

  const tbody = document.createElement('tbody');

  render(<ProductItem product={product} />, {
    wrapper: BrowserRouter,
    container: document.body.appendChild(tbody),
  });

  return { product };
};

describe('ProductItem component', () => {
  it('renders correctly', () => {
    renderProductItem({ isActive: true });
    expect(screen.getByTestId('product-item')).toBeInTheDocument();
  });

  it('should show text "Sim" if product is active', () => {
    renderProductItem({ isActive: true });
    expect(screen.getByText('Sim')).toBeInTheDocument();
  });

  it('should show text "Não" if product is not active', () => {
    renderProductItem({ isActive: false });
    expect(screen.getByText('Não')).toBeInTheDocument();
  });

  it('should redirect page when button edit is clicked', () => {
    const { product } = renderProductItem({ isActive: true });

    const buttonEdit = screen.getByRole('button', { name: /editar produto/i });
    userEvent.click(buttonEdit);

    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith(`/products/${product._id}`);
  });
});
