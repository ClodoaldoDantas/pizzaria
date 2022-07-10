import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Products } from '../../pages/Products';
import { renderWithRouter, setupMatchMedia } from '../../utils/testUtils';
import { ProductsContext } from '../../contexts/ProductsContext';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const renderProductsPage = () => {
  setupMatchMedia();
  renderWithRouter(
    <ProductsContext.Provider value={{ products: [] } as any}>
      <Products />
    </ProductsContext.Provider>
  );
};

describe('Products page', () => {
  it('renders correctly', () => {
    renderProductsPage();

    expect(screen.getByTestId('page-products')).toBeInTheDocument();
  });

  it('should redirect to product add page', () => {
    renderProductsPage();

    const button = screen.getByRole('button', { name: /adicionar produto/i });
    userEvent.click(button);

    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith('/products/new');
  });
});
